var isAdmin = function(req, res, next) {
    if(req.user && req.user.isAdmin) {
        next();
    } else {
        res.redirect(res.locals.url.login);
    }
}

module.exports = isAdmin;
