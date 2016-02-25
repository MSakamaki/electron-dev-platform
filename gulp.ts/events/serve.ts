/// <reference path="../../typings/tsd.d.ts"/>

import env from '../env';

(() => {

  const gulp = require('gulp');
  const exec = require('child_process').exec;
  const runSequence = require('run-sequence');

  gulp.task('serve', cb=>
    runSequence(
      ['clean:compile', 'clean:build'],
      ['ts', 'copy:assets'],
      'watch',
      // update checker
      'build:compile',
      ['pack:osx', 'mock:server'],
      'exec:electron',
      cb));

  gulp.task('exec:electron', () => exec('ENVIRONMENT=dev electron dest/compile/index.js'));


})();