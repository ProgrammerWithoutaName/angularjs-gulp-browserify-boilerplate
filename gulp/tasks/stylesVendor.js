'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var browserSync  = require('browser-sync');

gulp.task('styles:vendor', function () {

  return gulp.src(config.styles.vendor.src)
      .pipe(gulp.dest(config.styles.vendor.dest))
      .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));
});
