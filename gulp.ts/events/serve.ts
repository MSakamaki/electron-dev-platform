/// <reference path="../../typings/tsd.d.ts"/>

import env from '../env';

(() => {

  const gulp = require('gulp');
  const exec = require('child_process').exec;
  const runSequence = require('run-sequence');

  gulp.task('serve', cb=>
    runSequence(
      'clean:compile',
      ['ts', 'copy:assets'],
      'watch',
      'exec:electron',
      cb));

  gulp.task('exec:electron', () => exec('ENVIRONMENT=dev electron dest/compile/index.js'));


})();