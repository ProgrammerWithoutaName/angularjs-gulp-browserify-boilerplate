'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('angular-bootstrap-tpls');
require('angular-bootstrap');

// site modules
require('./templates');
require('./controllers/_index');
require('./services/_index');
require('./directives/_index');

require('./components/_index');
require('./features/_index');

// create and bootstrap application
(function() {

  var requires = [
    'ui.router',
    'ui.bootstrap',
    'templates',
    'app.controllers',
    'app.services',
    'app.directives',
    'marketplace.login'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);
  angular.module('app').constant('AppSettings', require('./constants'));

  angular.module('app').config(require('./routes'));

  angular.module('app').run(require('./on_run'));

  angular.bootstrap(document, ['app']);
})();
