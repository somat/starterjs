var HomeController = {}

HomeController.index = function(req, res) {
    var data = [];

    res.render('index', data);
}

module.exports = HomeController;
