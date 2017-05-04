var url = {}

// Common URL
url.base = '/';
url.media = '/';

// Auth URL
url.login = url.base.concat('login');
url.register = url.base.concat('register');
url.logout = url.base.concat('logout');

// Backend URL
url.backend = '/admin/';
url.home = url.backend.concat('home');
url.dashboard = url.backend.concat('dashboard');
url.setting = url.backend.concat('settings');

url.user_list = url.backend.concat('users');
url.user_add = url.backend.concat('user/add');

module.exports = url;
