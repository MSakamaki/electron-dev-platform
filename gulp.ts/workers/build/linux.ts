/// <reference path="../../../typings/tsd.d.ts"/>

import env from '../../env';
import Config from './config';

const gulp = require('gulp');
const packager = require('electron-packager');
const builder = require('electron-builder').init();

const configer = new Config('x64','linux');
gulp.task('pack:linux', done => packager(configer.packager(), done));


