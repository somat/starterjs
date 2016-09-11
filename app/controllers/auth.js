var User = require('../models/user');

var AuthController = {};

AuthController.login = function(req, res) {
    if(req.user) {
        res.redirect(res.locals.url.base);
    } else {
        res.render('auth/login', {
            user: req.user,
            csrf: req.csrfToken()
        });
    }
}

AuthController.doLogin = function(req, res) {
    res.redirect(res.locals.url.base);
}

AuthController.doLogout = function(req, res) {
    req.logout();
    res.redirect(res.locals.url.base);
}

module.exports = AuthController;
