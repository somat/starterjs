var DashboardController = {}

DashboardController.home = function(req, res) {
    var data = [];

    res.render('backend/dashboard/index', data);
}

DashboardController.admin = function(req, res) {
	var data = [];

	res.render('backend/dashboard/admin', data);
}

module.exports = DashboardController;
