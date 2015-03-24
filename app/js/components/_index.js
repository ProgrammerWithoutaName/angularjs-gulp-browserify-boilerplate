'use strict';
var bulk;
bulk = require('bulk-require');

bulk(__dirname, ['./**/!(*_index|*.spec|*.module).js']);
