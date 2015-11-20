import env from '../env';

const gulp = require('gulp');
let livereload = require('gulp-livereload');
let js = `${env.dir.src}/**/*.js`;
let html = `${env.dir.src}/**/*.html`;

gulp.task('watch', ()=> {
  livereload.listen();

  gulp.watch(js, ['jscs'])
    .on('change', (event)=> gulp.src(js).pipe(livereload()));

  gulp.watch(html, ()=> gulp.src(html).pipe(livereload()));
});
