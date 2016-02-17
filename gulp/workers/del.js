import env from '../env';

const gulp = require('gulp');
const del = require('del');

gulp.task('clean:compile', done=> del([
    `${env.dir.compile}`,
  ], done));

gulp.task('clean:build', done=> del([
    `${env.dir.pack}/*`,
    `${env.dir.dist}/*`,
  ], done));
