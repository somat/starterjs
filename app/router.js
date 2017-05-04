var express = require('express');
var router = express.Router();
var passport = require('passport');
var home = require('./controllers/home');
var auth = require('./controllers/auth');

var user = require('./controllers/admin/user');
var dashboard = require('./controllers/admin/dashboard');

var isauth = require('../helpers/isauth');
var isadmin = require('../helpers/isadmin');
var config = require('../config/config');

var urlhelper = require('../helpers/urlhelper');
var upload = require('../helpers/upload');


// ===== Routing List ====
router.get(urlhelper.base, home.index);

// Auth
router.get(urlhelper.login, auth.login);
router.post(urlhelper.login, auth.doLogin);
router.get(urlhelper.logout, auth.doLogout);

// ---- Member ----
router.get(urlhelper.home, isauth, dashboard.home);

// --- Admin ---
// Dashboard
router.get(urlhelper.dashboard, isadmin, dashboard.admin);

// Users
router.get(urlhelper.user_list, isadmin, user.index);
router.get(urlhelper.user_add, isadmin, user.add);
router.post(urlhelper.user_add, isadmin, user.create);

module.exports = router;
