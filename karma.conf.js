// Karma configuration
// Generated on Tue Mar 19 2019 17:20:12 GMT+0900 (GMT+09:00)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    // resource 경로추가
    files: [
    "src/mago3d/**/*.js",
    {pattern : "test/mago3d/resource/**", included : false},
    "test/mago3d/**/*.test.js"
    ],

    // 샘플 데이터들은 ./resource로 접근
    proxies : {
      '/resource' :  '/base/test/mago3d/resource'
    },

    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],



    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    
    // web server port
    port: 9876,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // add jasmine configuration
    client: {
      jasmine: {
        random : false
      }
    },

    customLaunchers: {
      Chrome_with_debugging: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9222'],
        debug: true
      }
    }
  })
}
