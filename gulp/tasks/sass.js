var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./app/scss/build.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/dist/css'));
});
