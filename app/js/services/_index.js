'use strict';

var angular, bulk;

angular = require('angular');
bulk = require('bulk-require');

module.exports = angular.module('app.services', []);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);
