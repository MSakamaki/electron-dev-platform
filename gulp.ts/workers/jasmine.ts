/// <reference path="../../typings/tsd.d.ts"/>

import env from '../env';

const gulp = require('gulp');
var electron = require('electron-prebuilt')
var proc = require('child_process')

gulp.task('jasmine:platform', () => {
  var child = proc.spawn(electron, ['test/unit/platform.jasmine.config.js'])

  child.stdout.on('data', data=> console.log(''+data));
  child.stderr.on('data', data=> console.error(''+data));
  child.on('close', code=> console.log('child process exited with code ' + code));

});


