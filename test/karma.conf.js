'use strict';

var istanbul = require('browserify-istanbul');

module.exports = function(config) {

  config.set({

    basePath: '../',
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
      'app/js/**/*.js': ['browserify', 'babel', 'coverage']
    },
    browsers: ['Chrome'],
    reporters: ['progress', 'coverage'],

    autoWatch: true,

    plugins: [
      'karma-jasmine',
      'karma-browserify',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine-html-reporter',
      'karma-mocha-reporter',
      'karma-growl-reporter',
      'karma-teamcity-reporter',
      'karma-phantomjs-launcher'
    ],

    browserify: {
      debug: true,
      transform: ['browserify-shim', 'bulkify', istanbul({
        ignore: ['**/node_modules/**', '**/test/**'],
      })],
    },

    proxies: {
      '/': 'http://localhost:9876/'
    },

    urlRoot: '/__karma__/',

    files: [
      // angular:
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',

      // app-specific code
      'app/js/main.js',

      // test files
      'test/unit/**/*.js'
    ]

  });

};
