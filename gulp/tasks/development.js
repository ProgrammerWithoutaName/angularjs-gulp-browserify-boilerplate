'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');



gulp.task('dev', ['dev:server', 'dev:tests']);

gulp.task('dev:tests', function (cb) {
  runSequence(['lint', 'unit:dev'], cb);
});

gulp.task('dev:server', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = false;

  runSequence(['styles', 'images', 'fonts', 'views', 'browserify', 'js:vendor'], 'watch', cb);

});
