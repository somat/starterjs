var config = require('../config/config');
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, config.upload_dir);
    },
    filename: function(req, file, callback){
        callback(null, Date.now() + '-' + file.originalname);
    }
});

var upload = multer({
    storage: storage,
    limits: {fileSize: 5000000},
    fileFilter: function(req, file, callback) {
        var accepted = [
            'text/plain',
            'image/png',
            'image/jpg',
            'image/jpeg',
            'image/gig',

            'application/pdf',

            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',

            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',

            'application/vnd.ms-powerpoint',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation'
        ];

        if(accepted.indexOf(file.mimetype) == -1) {
            callback(null, false);
        } else {
            callback(null, true);
        }
    }
});

module.exports = upload;
