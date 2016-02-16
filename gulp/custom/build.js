
// ENVIRONMENT=dist electron dest/platform/index.js
// script src <script src="./app.js"></script> only
import env from '../env';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build:osx', cb=>
  runSequence(
    'clean',
    ['ts', 'jspm_bundle', 'copy:browser', 'writePackageJson'],
    'pack:osx',
    cb));

gulp.task('build:win', cb=>
  runSequence(
    'clean',
    ['ts', 'jspm_bundle', 'copy:browser', 'writePackageJson'],
    'pack:win',
    cb));

gulp.task('build:win32', cb=>
  runSequence(
    'clean',
    ['ts', 'jspm_bundle', 'copy:browser', 'writePackageJson'],
    'pack:win32',
    cb));



