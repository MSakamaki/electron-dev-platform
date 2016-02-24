/// <reference path="../../typings/tsd.d.ts"/>

import env from '../env';

const gulp = require('gulp');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');

gulp.task('test', cb=>
  runSequence(
    'clean:unit',
    'ts:unit',
    'jasmine:platform',
    cb));
