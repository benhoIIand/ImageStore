var express  = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    flash    = require('connect-flash'),
    dbConfig = require('./config/database'),
    quickthumb = require('quickthumb');

var app = express();

app.configure(function() {
    app.set('port', parseInt(process.env.PORT, 10) || 4000);
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/app'));
    app.use(express.favicon('app/favicon.ico'));

    // On the fly image resizing
    app.use('/', quickthumb.static(__dirname + '/store', {
        type: 'resize'
    }));

    app.set('view engine', 'ejs'); // set up ejs for templating
    app.set('views' ,__dirname + '/app');

    // app.use(express.logger('dev'));

    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));

    // required for passport
    app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());

    app.use(app.router);
});

mongoose.connect(dbConfig.url);

// require('./config/passport')(passport);
require('./routes/routes.js')(app, passport);

app.listen(app.get('port'), function(){
    console.log('Express server listening on port: ' + app.get('port'));
});
