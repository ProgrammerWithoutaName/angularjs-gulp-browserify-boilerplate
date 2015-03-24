'use strict';
var karmaConfigFile = 'test/karma.conf.js';

module.exports = {

  'serverport': 3000,
  'angular': {
    'src': ['bower_components/angular/angular+(.min|).js'],
    'dest': 'build/js/'
  },
  'styles': {
    'vendor': {
      'src': 'app/vendor/**/*.min.css',
      'dest': 'build/vendor/'
    },
    'src' : 'app/styles/**/*.less',
    'dest': 'build/css'
  },

  'scripts': {
    'src' : 'app/js/**/*.js',
    'dest': 'build/js'
  },

  'images': {
    'src' : 'app/images/**/*',
    'dest': 'build/images'
  },

  'fonts': {
    'vendor': {
      'src': 'app/vendor/**/fonts/*',
      'dest': 'build/vendor/'
    },
    'src' : ['app/fonts/**/*'],
    'dest': 'build/fonts'
  },

  'views': {
    'watch': [
      'app/index.html',
      'app/views/**/*.html'
    ],
    'src': 'app/views/**/*.html',
    'dest': 'app/js'
  },

  'gzip': {
    'src': 'build/**/*.{html,xml,json,css,js,js.map}',
    'dest': 'build/',
    'options': {}
  },

  'dist': {
    'root'  : 'build'
  },

  'browserify': {
    'entries'   : ['./app/js/main.js'],
    'bundleName': 'main.js',
    'sourcemap' : true
  },

  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js',
    'karmaConf': {
      'unit': {
        'configFile': karmaConfigFile,
        'action': 'run'
      },
      'dev': {
        'configFile': karmaConfigFile,
        'browsers': ['PhantomJS', 'Chrome'],
        'reporters': ['html', 'growl', 'mocha'],
        'action': 'watch',
        'singleRun': false
      },
      'teamcity': {
        'configFile': karmaConfigFile,
        'browsers': ['PhantomJS'],
        'reporters': ['teamcity'],
        'action': 'run',
        'singleRun': true
      },
      'debug': {
        'configFile': karmaConfigFile,
        'browsers': ['PhantomJS', 'Chrome'],
        'reporters': ['html', 'growl', 'mocha'],
        'action': 'watch',
        'singleRun': false
      }
    }
  }

};
