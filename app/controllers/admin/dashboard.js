var DashboardController = {}

DashboardController.home = function(req, res) {
    var data = [];

    res.render('admin/dashboard/index', data);
}

DashboardController.admin = function(req, res) {
	var data = [];

	res.render('admin/dashboard/admin', data);
}

module.exports = DashboardController;
