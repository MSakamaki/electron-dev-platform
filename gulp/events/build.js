
// ENVIRONMENT=dist electron dest/platform/index.js
// script src <script src="./app.js"></script> only
import env from '../env';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build:compile', cb=>
  runSequence(
    'clean:compile',
    'ts',
    ['jspmBundle', 'copy:browser', 'copy:assets', 'writePackageJson'],
    cb));

gulp.task('build:osx', cb=>
  runSequence(
    'clean:build',
    'pack:osx',
    cb));

gulp.task('build:win', cb=>
  runSequence(
    'clean:build',
    'pack:win',
    cb));

gulp.task('build:win32', cb=>
  runSequence(
    'clean:build',
    'pack:win32',
    cb));
