var gulp = require('gulp');
var _ = require('lodash');
var karma = require('karma').server;

//one could also externalize common config into a separate file,
//ex.: var karmaCommonConf = require('./karma-common-conf.js');
var karmaCommonConf = {
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
        'frontend-tests/unit/**/*Spec.js'
    ]
};

/**
 * Run test once and exit
 */
gulp.task('test:unit', function(done) {
    karma.start(_.assign({}, karmaCommonConf, {
        singleRun: true
    }), done);
});

/**
 * Run tests and keep listening for changes
 */
gulp.task('test:unit:dev', function(done) {
    karma.start(_.assign({}, karmaCommonConf, {
        singleRun: false
    }), done);
});
