/// <reference path="../../typings/tsd.d.ts"/>

import env from '../env';

const gulp = require('gulp');

// https://github.com/Microsoft/TypeScript/wiki/tsconfig.json
const ts = require('gulp-typescript');
const concat = require('gulp-concat');

const platConfig = require('../../src/platform/tsconfig.json');

gulp.task('ts', function () {
  return gulp.src(env.src.platform.src)
  .pipe(ts(platConfig.compilerOptions))
  .pipe(gulp.dest(env.dir.compile));
});


gulp.task('ts:unit', function () {
  return gulp.src(env.src.platform.test)
  .pipe(ts({
        "module": "commonjs",
        'moduleResolution': 'node',
        "noImplicitAny": true,
        "sourceMap": true,
        "typeCheck": true,
        "tsconfig": true,
        "removeComments": true
    }))
  .pipe(gulp.dest('dest/unit'));
});