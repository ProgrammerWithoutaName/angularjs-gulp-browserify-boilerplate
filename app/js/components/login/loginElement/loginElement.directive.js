'use strict';

var loginModule;

loginModule = require('../login.module');

loginModule.directive('loginElement', [function() {
  return {
    restrict: 'E',
    controller: 'loginElementController',
    controllerAs: 'login',
    bindToController: true,
    templateUrl: '/components/login/loginElement/login.directive.tpl.html',
    scope: {
      'onSuccess' : '='
    }
  };
}]);
