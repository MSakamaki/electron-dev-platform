const gulp = require('gulp');
const jscs = require('gulp-jscs');

gulp.task('default', () => {
    return gulp.src('src/app.js')
        .pipe(jscs({fix: true}))
        .pipe(jscs.reporter())
        .pipe(jscs.reporter('fail'))
        .pipe(gulp.dest('src'));
});