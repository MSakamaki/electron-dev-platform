import env from '../env';

const gulp = require('gulp');
let livereload = require('gulp-livereload');

let script = [
    `${env.dir.browser}/**/*.js`,
    `${env.dir.browser}/**/*.ts`,
];
let html = `${env.dir.browser}/**/*.html`;

gulp.task('watch', ()=> {
  livereload.listen();

  gulp.watch(script)
    .on('change', (event)=> gulp.src(script).pipe(livereload()));

  gulp.watch(html, ()=> gulp.src(html).pipe(livereload()));
});
