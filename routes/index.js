var path = require('path');

module.exports = {

    app: function(req, res) {
        res.sendfile(path.normalize(__dirname + '/../app/app.html'));
    },

    about: function(req, res) {
        res.sendfile(path.normalize(__dirname + '/../app/about.html'));
    },

    sendFile: function(req, res) {
        res.sendfile(path.normalize(__dirname + '/../store/' + req.params.file));
    },

    login: function(req, res) {
        res.render('login.ejs', {
            referrer: req.query.r,
            message: req.flash('loginMessage')
        });
    },

    register: function(req, res) {
        res.render('register.ejs', {
            message: req.flash('signupMessage')
        });
    }

};
