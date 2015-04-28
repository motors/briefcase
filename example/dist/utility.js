define(['exports', 'module', './adapters/underscoreAdapter'], function (exports, module, _adaptersUnderscoreAdapter) {
  'use strict';

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

  var _underscoreAdapter = _interopRequire(_adaptersUnderscoreAdapter);

  var utility = Object.create(_underscoreAdapter);

  module.exports = utility;
});