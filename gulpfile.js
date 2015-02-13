var gulp = require('gulp');
var preprocess = require('gulp-preprocess');
var browserify = require('browserify');
var concat = require('concat-stream')
var gutil = require('gulp-util');



gulp.task('html', function () {
    bundle(function (bundleStr) {
        gulp.src('./template.html')
            .pipe(preprocess({
                context: {
                    script: encodeURIComponent(bundleStr)
                }
            }))
            .pipe(gulp.dest('./'))
    });
});

gulp.task('default', ['html']);

function bundle(cb) {
    var b = browserify();
    b.add('./main.js');
    b.transform({
        global: true
    }, 'browserify-css');
    b.transform({
        global: true
    }, 'uglifyify');
    b.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(concat(function (data) {
            cb(data.toString('utf8'));
        }));
}