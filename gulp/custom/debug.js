import env from '../env';

const gulp = require('gulp');
const exec = require('child_process').exec;
const livereload = require('gulp-livereload');

gulp.task('debug', ['build', 'watch'], ()=> {
  gulp.src(`${env.dir.src}/**/*.html`)
    .pipe(gulp.dest(env.dir.src))
    .pipe(livereload());
  exec('electron .build/index.js');
});
