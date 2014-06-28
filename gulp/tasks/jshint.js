var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
    return gulp.src('./src/Flubit/Bundle/Partner/WidgetBundle/Resources/public/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});
