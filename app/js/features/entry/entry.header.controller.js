'use strict';
var entryModule;

entryModule = require('./entry.module');

function EntryHeaderController($state) {
  var self = this;

  self.loginSuccess = function() {
    $state.go('dashboard');
  };

}

entryModule.controller('entryHeaderController', [EntryHeaderController]);
