var config = {};

// Database connection
config.db_string = 'mongodb://localhost/starterjs';

// Application port
config.port = '3000';

// Session
config.session_secret = 'secret';

// Upload
config.upload_dir = __dirname + '/public/uploads/';

module.exports = config;
