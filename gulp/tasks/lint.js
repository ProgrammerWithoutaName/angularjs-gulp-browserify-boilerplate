'use strict';

var config, gulp, jshint, jscs, jscsStylish, noop;

config = require('../config');
gulp   = require('gulp');
jshint = require('gulp-jshint');
jscs = require('gulp-jscs');
jscsStylish = require('gulp-jscs-stylish');

noop = function() {};

gulp.task('lint', function() {
  return gulp.src([config.scripts.src, '!app/js/templates.js'])
    .pipe(jshint())
    .pipe(jscs())
    .on('error', noop)
    .pipe(jscsStylish.combineWithHintResults())
    .pipe(jshint.reporter('jshint-stylish'));
});
