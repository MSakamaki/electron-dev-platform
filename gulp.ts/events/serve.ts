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

  gulp.task('mock:win32', cb=>
    runSequence(
      'build:compile',
      'pack:win32',
      'mock:server',
      cb));

  gulp.task('mock:osx', cb=>
    runSequence(
      'build:compile',
      'pack:osx',
      'mock:server',
      cb));
    // todo: https://github.com/electron-userland/electron-prebuilt#programmatic-usage
    gulp.task('exec:electron', () => {
        if (process.platform !== 'win32'){
            exec('ENVIRONMENT=dev electron dest/compile/index.js')
        }else{
            exec(`set ENVIRONMENT=dev&& electron dest/compile/index.js`)
        }
    });
})();