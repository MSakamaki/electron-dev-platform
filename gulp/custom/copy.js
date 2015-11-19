const gulp = require('gulp');

gulp.task('copy:build', ()=>
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('.build')));
