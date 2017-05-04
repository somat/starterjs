var config = require('../config/config');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(config.db_string);

var User = require('../app/models/user');

User.register(
    new User({
        username: 'admin',
        fullname: 'admin',
        isAdmin: true
    }),
    'password',
    function(err, user) {
        if(err){
            console.log(err);
            process.exit(1);
        } else {
            console.log('User created.');
            console.log(user);
            process.exit();
        }
    }
);
