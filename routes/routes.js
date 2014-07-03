var assets = require('./assets'),
    upload = require('./upload'),
    index = require('./index');

function isLoggedInPage(req, res, next) {
    return next();
    // if (req.isAuthenticated()) return next();
    // res.redirect('/login?r='+ req.originalUrl);
}

function alreadyLoggedIn(req, res, next) {
    return next();
    // if (!req.isAuthenticated()) return next();
    // res.redirect('/');
}

function isLoggedInAPI(req, res, next) {
    return next();
    // if (req.isAuthenticated()) return next();
    // res.send(401);
}

module.exports = function(app, passport) {

    // Get Image
    app.get('/:file', isLoggedInAPI, index.sendFile);

    // Upload
    app.get('/api/upload', isLoggedInAPI, upload.byUrl);

    // Assets
    app.get('/api/assets', isLoggedInAPI, assets.getAll);
    app.get('/api/assets/', isLoggedInAPI, assets.getAll);
    app.get('/api/assets/:id', isLoggedInAPI, assets.get);
    app.post('/api/assets', isLoggedInAPI, assets.create);
    app.post('/api/assets/', isLoggedInAPI, assets.create);
    app.put('/api/assets/:id', isLoggedInAPI, assets.update);
    app.delete('/api/assets/:id', isLoggedInAPI, assets.delete);

    // Login
    app.get('/login', alreadyLoggedIn, index.login);
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // Register
    app.get('/register', alreadyLoggedIn, index.register);
    app.post('/register', passport.authenticate('local-register', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/register', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // Logout
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });

    // Default
    app.get('/*', isLoggedInPage, index.app);

};
