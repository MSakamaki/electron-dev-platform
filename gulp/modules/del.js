import env from '../env';

const gulp = require('gulp');
const del = require('del');

gulp.task('clean', done=> del([
    `${env.dir.dest}/*`,
    `${env.dir.dist}/*`,
  ], done));