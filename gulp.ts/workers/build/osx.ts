/// <reference path="../../../typings/tsd.d.ts"/>

import env from '../../env';
import Config from './config';

const gulp = require('gulp');
const zip = require('gulp-zip');
const packager = require('electron-packager');
const builder = require('electron-builder').init();

const configer = new Config('x64','darwin');
gulp.task('pack:osx', done => packager(configer.packager(), done));
gulp.task('zip:osx', ()=> gulp.src(configer.packFullPath)
.pipe(zip('osx-x64.zip'))
.pipe(gulp.dest(env.dir.pack)));
gulp.task('installer:osx', done => builder.build(configer.builder(), done));
