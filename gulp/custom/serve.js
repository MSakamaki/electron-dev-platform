import env from '../env';

const gulp = require('gulp');
const exec = require('child_process').exec;
const livereload = require('gulp-livereload');

gulp.task('serve', ['watch'], ()=> {
  exec('electron src/main.js');
});
