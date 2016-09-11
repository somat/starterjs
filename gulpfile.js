var gulp = require('gulp');
var merge = require('merge-stream');
var concat = require('gulp-concat');

gulp.task('copy-assets', function() {
    var jquery = gulp.src('./bower_components/jquery/dist/jquery.min.js')
                    .pipe(gulp.dest('./public/js'));

    var angular = gulp.src('./bower_components/angular/angular.min.js')
                    .pipe(gulp.dest('./public/js'));

    var angularmap = gulp.src('./bower_components/angular/angular.min.js.map')
                    .pipe(gulp.dest('./public/js'));

    var juimages = gulp.src('./bower_components/jquery-ui/themes/base/images/**')
                    .pipe(gulp.dest('./public/css/images'));

    var fafonts = gulp.src('./bower_components/font-awesome/fonts/**')
                    .pipe(gulp.dest('./public/fonts'));

    var bsfonts = gulp.src('./bower_components/bootstrap/dist/fonts/**')
                    .pipe(gulp.dest('./public/fonts'));

    var lteimg = gulp.src('./bower_components/admin-lte/dist/img/**')
                    .pipe(gulp.dest('./public/img'));

    var bsmap = gulp.src('./bower_components/bootstrap/dist/css/bootstrap-theme.min.css.map')
                    .pipe(gulp.dest('./public/css'));

    return merge(jquery, angular, angularmap, juimages, fafonts, bsfonts, lteimg, bsmap);
    
});

gulp.task('concat-js', function() {
    return gulp.src([
        './bower_components/jquery-ui/jquery-ui.min.js',
        './bower_components/bootstrap/dist/js/bootstrap.min.js',
        './bower_components/admin-lte/dist/js/app.min.js'
        ])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('concat-style', function() {
    return gulp.src([
        './bower_components/jquery-ui/themes/base/jquery-ui.min.css',
        './bower_components/font-awesome/css/font-awesome.min.css',
        './bower_components/bootstrap/dist/css/bootstrap.min.css',
        './bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
        './bower_components/admin-lte/dist/css/AdminLTE.min.css',
        './bower_components/admin-lte/dist/css/skins/skin-blue.min.css'
        ])
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('default', ['copy-assets', 'concat-js', 'concat-style'], function() {});
