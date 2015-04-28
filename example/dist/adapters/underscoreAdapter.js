define(['exports', 'module', '../lib/underscore', '../lib/briefcase', '../contract'], function (exports, module, _libUnderscore, _libBriefcase, _contract) {
    'use strict';

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

    var _2 = _interopRequire(_libUnderscore);

    var _briefcase = _interopRequire(_libBriefcase);

    var _contract2 = _interopRequire(_contract);

    var underscoreAdapter = {

        /** @override **/
        each: function each(list, iterator) {
            _2.each(list, iterator);
        }

    };

    _briefcase.contract(_contract2, underscoreAdapter);

    module.exports = underscoreAdapter;
});