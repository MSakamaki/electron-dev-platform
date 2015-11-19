import env from '../env';

const gulp = require('gulp');
const livereload = require('gulp-livereload');

gulp.task('watch', ()=> {
  livereload.listen();
  gulp.watch(`${env.dir.src}/**/*.js`, ['babel']);
  gulp.watch(`${env.dir.src}/**/*.html`, ['copy:build']);
});
