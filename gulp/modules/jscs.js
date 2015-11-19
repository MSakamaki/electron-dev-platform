import env from '../env';

const gulp = require('gulp');
const jscs = require('gulp-jscs');

gulp.task('jscs', ()=>
  Promise.all([
    env.dir.src,
    env.dir.gulp,
  ].map(dir=>
    gulp.src(`${dir}/**/*.js`)
      .pipe(jscs({fix: true}))
      .pipe(jscs.reporter())
      .pipe(jscs.reporter('fail'))
      .pipe(gulp.dest(dir)))));
