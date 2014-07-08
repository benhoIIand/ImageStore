var fs = require('fs');
var onlyScripts = require('./util/scriptFilter');
var tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);
var gulp = require('gulp');

tasks.forEach(function(task) {
    require('./tasks/' + task);
});


/**
 * Tasks
 */

// Default
gulp.task('default', ['sass']);

// Dev
gulp.task('dev', ['sass', 'jshint', 'watch']);

// CI build
gulp.task('build:ci', ['jshint', 'sass']);

// Prod build
gulp.task('build:prod', ['sass']);
