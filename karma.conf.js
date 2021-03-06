// Karma configuration for TeamCity
module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        // you might need to add frameworks, for example:
        // 'knockout.js',
        // 'jquery.min.js',
        files: [
            'main/app/**/*.js',
            'main/tests/**/*.js'
        ],

        // list of files to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'main/app/**/*.js': ['coverage', 'eslint']
        },

        eslint: {
            stopOnError: false,
            stopOnWarning: false,
            showWarnings: false,
            engine: {
                configFile: '.eslintrc.js'
            }
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['coverage', 'progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // or you can just use 'chrome'
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        singleRun: true,

        coverageReporter: {
            reporters:[
                {type: 'html', dir:'coverage/'}
            ],
            check: {
                global: {
                    statements: 80,
                    branches: 80,
                    functions: 80,
                    lines: 80,
                    excludes: []
                },
                each: {
                    statements: 80,
                    branches: 80,
                    functions: 80,
                    lines: 80,
                    excludes: [],
                    overrides: {}
                }
            }
        }
    });
};