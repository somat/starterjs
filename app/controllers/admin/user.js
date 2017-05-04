var User = require('../../models/user');

var UserController = {};

UserController.index = function(req, res) {
    if(req.query.page) {
        page = req.query.page;
    }
    else {
        page = 1;
    }

    User.paginate({}, {
        lean: true,
        limit: 10,
        page: page,
        sort: {created_at: -1}
        }
    )
    .then(
        function(result) {
            res.render(
                'admin/user/index',
                {
                    title: 'Users',
                    users: result.docs,
                    total: result.total,
                    limit: result.limit,
                    page: result.page,
                    pages: result.pages,
                    nextPage: (result.page - 0) + 1,
                    prevPage: (result.page - 0) - 1
                }
        );
        }
    );

}

UserController.add = function(req, res) {
    res.render('admin/user/add', {
        title: 'Add User',
        csrf: req.csrfToken()
    });
}

UserController.create = function(req, res) {
    req.assert('username', 'Username cannot empty').notEmpty();
    req.assert('password', 'password cannot empty').notEmpty();

    error = req.validationErrors();

    if(error) {
        res.redirect(res.locals.url.user_add);
    } else {
        User.register(
            new User({
                username: req.body.username,
                fullname: req.body.fullname
            }),
            req.body.password,
            function(err, user) {
                if(err) {
                    res.redirect(res.locals.url.user_add);
                } else {
                    res.redirect(res.locals.url.user_list);
                }
            }
        );
    }
}

module.exports = UserController;
