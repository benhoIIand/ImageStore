var gulp = require('gulp');

gulp.task('watch', [], function() {
    gulp.watch('./src/Flubit/Bundle/Partner/WidgetBundle/Resources/public/scss/**/*.scss', ['sass']);
    gulp.watch('./src/Flubit/Bundle/Partner/WidgetBundle/Resources/public/js/**/*.js', ['jshint']);
});
