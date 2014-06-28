var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./src/Flubit/Bundle/Partner/WidgetBundle/Resources/public/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/Flubit/Bundle/Partner/WidgetBundle/Resources/public/css'));
});
