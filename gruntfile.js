var babel = require('babel');
var path = require('path');

module.exports = function(grunt) {

    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        babel: {
            options: {
                modules: 'amd'
            },
            dist: {
                files: {
                    'dist/briefcase.js': 'src/briefcase.js',
                    'example/lib/briefcase.js': 'src/briefcase.js',
                    'example/dist/lib/underscore.js': 'example/lib/underscore.js',
                    'example/dist/lib/briefcase.js': 'src/briefcase.js',
                    'example/dist/adapters/underscoreAdapter.js': 'example/adapters/underscoreAdapter.js',
                    'example/dist/contract.js': 'example/contract.js',
                    'example/dist/utility.js': 'example/utility.js'
                }
            }
        }
    });

    grunt.registerTask('default', ['babel']);

}