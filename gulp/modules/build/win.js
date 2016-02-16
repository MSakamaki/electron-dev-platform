import env from '../../env';
import Config from './config';

const gulp = require('gulp');
const packager = require('electron-packager');
const builder = require('electron-builder').init();

const confWin64 = new Config('x64','win32');
gulp.task('pack:win', done => packager(confWin64.packager(), () => builder.build(confWin64.builder(), done)));

const confWin32 = new Config('ia32','win32');
gulp.task('pack:win32', done => packager(confWin32.packager(), () => builder.build(confWin32.builder(), done)));
