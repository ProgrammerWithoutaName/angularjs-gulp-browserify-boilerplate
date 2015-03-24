'use strict';

var angular, bulk;

angular = require('angular');
bulk = require('bulk-require');

module.exports = angular.module('app.directives', []);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);
