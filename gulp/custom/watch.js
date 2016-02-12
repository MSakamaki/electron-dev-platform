import env from '../env';

const gulp = require('gulp');
let livereload = require('gulp-livereload');

let script = [
    `${env.dir.src}/**/*.js`,
    `${env.dir.src}/**/*.ts`,
];
let html = `${env.dir.src}/**/*.html`;

gulp.task('watch', ()=> {
  livereload.listen();

  gulp.watch(script)
    .on('change', (event)=> gulp.src(script).pipe(livereload()));

  gulp.watch(html, ()=> gulp.src(html).pipe(livereload()));
});
