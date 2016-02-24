/// <reference path="../../typings/tsd.d.ts"/>

// ENVIRONMENT=dist electron dest/platform/index.js
// script src <script src="./app.js"></script> only
import env from '../env';

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('e2e:osx', cb=>
  runSequence(
    ['build:compile','ts:e2e'],
    'pack:osx',
    'protractor',
    cb));
