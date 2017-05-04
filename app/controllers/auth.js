var User = require('../models/user');

var AuthController = {};

AuthController.login = function(req, res) {
    if(req.user) {
        res.redirect(res.locals.url.loggedin_redirect);
    } else {
        res.render('auth/login', {
            user: req.user,
            csrf: req.csrfToken()
        });
    }
}

AuthController.doLogin = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      res.redirect(res.locals.url.loggedin_redirect);
    });
  })(req, res, next);
}

AuthController.doLogout = function(req, res) {
    req.logout();
    res.redirect(res.locals.url.base);
}

module.exports = AuthController;
