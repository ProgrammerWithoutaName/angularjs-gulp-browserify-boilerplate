'use strict';

var gulp   = require('gulp');
var karma  = require('gulp-karma');
var config = require('../config');

gulp.task('unit:debug', function() {

  // Nonsensical source to fall back to files listed in karma.conf.js,
  // see https://github.com/lazd/gulp-karma/issues/9
  return gulp.src('./thisdoesntexist')
    .pipe(karma(config.test.karmaConf.debug))
    .on('error', function() {});

});
