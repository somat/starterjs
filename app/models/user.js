var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var mongoosePaginate = require('mongoose-paginate');

var User = new Schema({
    username: {
        type: String,
        required: true
    },
    fullname: String,
    isAdmin: Boolean,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: Date
});

User.plugin(passportLocalMongoose);
User.plugin(mongoosePaginate);

module.exports = mongoose.model('User', User);
