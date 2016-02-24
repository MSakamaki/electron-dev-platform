/// <reference path="../../typings/tsd.d.ts"/>

import env from '../env';

const gulp = require('gulp');
const Jasmine = require('jasmine');
var jasmine = new Jasmine();

gulp.task('jasmine:platform', function () {
  jasmine.loadConfig(env.jasmine);
  return jasmine.execute();
});




