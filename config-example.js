var config = {};

// Database connection
config.db_string = 'mongodb://localhost/starterjs';

// Sesion
config.session_secret = 'secret';

// Uploads
config.upload_dir = __dirname + '/public/uploads/';

// URL Config
config.url = {};

// Common URL
config.url.base = '/';
config.url.media = '/';

// Auth URL
config.url.login = config.url.base.concat('login');
config.url.register = config.url.base.concat('register');
config.url.logout = config.url.base.concat('logout');

// Backend URL
config.url.backend = '/admin/';
config.url.home = config.url.backend.concat('home');
config.url.dashboard = config.url.backend.concat('dashboard');
config.url.setting = config.url.backend.concat('settings');

config.url.user_list = config.url.backend.concat('users');
config.url.user_add = config.url.backend.concat('user/add');

module.exports = config;
