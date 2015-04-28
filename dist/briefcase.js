define(['exports', 'module'], function (exports, module) {
    'use strict';

    var briefcase = (function () {

        /**
         * @param fn
         * @returns {Array|{index: number, input: string}}
         */
        function _parameters(fn) {
            var functionstr = fn.toString();
            return functionstr.slice(functionstr.indexOf('(') + 1, functionstr.indexOf(')')).match(/([^\s,]+)/g);
        }

        /**
         * @param array1
         * @param array2
         * @returns {boolean}
         */
        function _arrayIsEqual(array1, array2) {
            if (array1 === null || array2 === null) {
                return array1 === array2;
            }

            return array1.length == array2.length && array1.every(function (element, index) {
                return element === array2[index];
            });
        }

        /**
         * @param contract
         * @param obj
         */
        function contract(contract, obj) {
            for (var prop in contract) {
                if (!obj.hasOwnProperty(prop)) {

                    // function is unimplemented
                    contract[prop]();
                }
                if (!_arrayIsEqual(_parameters(obj[prop]), _parameters(contract[prop]))) {

                    // function has the wrong parameters
                    throw new Error(prop + ' must implement the parameters ' + _parameters(contract[prop]));
                }
            }
        }

        return {
            contract: contract
        };
    })();

    module.exports = briefcase;
});