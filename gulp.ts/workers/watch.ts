/// <reference path="../../typings/tsd.d.ts"/>

import env from '../env';

const gulp = require('gulp');
let livereload = require('gulp-livereload');

gulp.task('watch', ()=> {
  livereload.listen();

  gulp.watch(env.src.browser.script)
    .on('change', (event)=> gulp.src(env.src.browser.script).pipe(livereload()));

  gulp.watch(env.src.browser.html, ()=> gulp.src(env.src.browser.html).pipe(livereload()));
});
