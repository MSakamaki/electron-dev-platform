const gulp = require('gulp');
const jscs = require('gulp-jscs');

gulp.task('jscs', () => {
    return gulp.src('src/**/*.js')
        .pipe(jscs({fix: true}))
        .pipe(jscs.reporter())
        .pipe(jscs.reporter('fail'))
        .pipe(gulp.dest('src'));
});