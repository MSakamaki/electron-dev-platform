import env from '../env';

const gulp = require('gulp');
const livereload = require('gulp-livereload');

gulp.task('copy:build', ()=>
  gulp.src(`${env.dir.src}/**/*.html`)
    .pipe(gulp.dest(env.dir.build))
    .pipe(livereload()));
