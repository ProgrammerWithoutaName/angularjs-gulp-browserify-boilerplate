'use strict';

var config      = require('../config');
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var browserSync = require('browser-sync');

gulp.task('fonts:vendor', function() {

  return gulp.src(config.fonts.vendor.src)
    .pipe(changed(config.fonts.vendor.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.fonts.vendor.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true, once: true })));

});
