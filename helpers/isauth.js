var isAuth = function(req, res, next) {
    if(req.user) {
        next();
    } else {
        res.redirect(res.locals.url.login);
    }
}

module.exports = isAuth;
