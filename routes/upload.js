var fs = require('fs'),
    crypto = require('crypto'),
    request = require('request');

var getExtension = function(filename) {
    var files = filename.split('.');
    return files.length == 1 ? '' : files[files.length-1];
};

var downloadImage = function(uri, cb) {
    request.head(uri, function(err, res) {
        if(err) console.log(err);

        var size = parseInt(res.headers['content-length']);
        var filename = 'store/tmp/image.'+ (+new Date()) + '.'+ Math.floor(Math.random() * 100000000000000) + '.'+ getExtension(uri);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', function() {
            cb(filename, size);
        });
    });
};

var saveImage = function(tempFilename, size, cb) {
    fs.readFile(tempFilename, { encoding: 'utf8' }, function(err, data) {
        var ext = getExtension(tempFilename);
        var hashfilename = crypto.createHash('md5').update(data, 'utf8').digest('hex').substring(0, 16) +'.'+ ext;
        var filename = hashfilename.replace('/tmp/', '/');

        fs.rename(tempFilename, 'store/'+ filename, function(err) {
            if(err) console.log(err);

            request.post('http://localhost:4000/api/assets', {
                form: {
                    filename: filename,
                    size: size
                }
            }, function() {
                cb(hashfilename);
            });
        });
    });
};

module.exports = {

    byUrl: function(req, res) {
        var uri = req.query.url;

        if(!uri) {
            res.json({
                error: 'No url provided'
            });
            return false;
        }

        downloadImage(uri, function(tempFilename, size) {
            saveImage(tempFilename, size, function(filename) {
                res.send(filename);
            });
        });
    }

};
