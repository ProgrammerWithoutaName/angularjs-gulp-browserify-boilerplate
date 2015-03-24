'use strict';

var config      = require('../config');
var gulp        = require('gulp');

gulp.task('js:vendor', function() {

  return gulp.src(config.angular.src)
    .pipe(gulp.dest(config.angular.dest));

});
