/* global angular */
'use strict';

describe('Unit: loginElement.controller', function() {

  var loginElementController;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    // mock the directive
    angular.mock.inject(function($controller, $rootScope) {
      loginElementController = $controller('loginElementController', {
        $scope: $rootScope.$new()
      });
    });
  });

  it('should exist', function() {
    expect(loginElementController).toBeDefined();
  });

});
