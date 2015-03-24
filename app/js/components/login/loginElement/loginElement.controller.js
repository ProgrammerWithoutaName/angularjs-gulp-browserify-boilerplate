'use strict';

var loginModule;

loginModule = require('../login.module');

function LoginElementController($scope) {
  var self, onSuccess;

  self = this;
  onSuccess = $scope.onSuccess || function() {};

  self.model = {
    user: '',
    password: '',
    rememberMe: false
  };

  self.submit = function() {
    onSuccess(); // we will most likely be sending something back, but for now this works.
  };

}

loginModule.controller('loginElementController', LoginElementController);
