import env from '../../env';
import Config from './config';

const gulp = require('gulp');
const packager = require('electron-packager');
const builder = require('electron-builder').init();

const configer = new Config('x64','darwin');
gulp.task('pack:osx', done => packager(configer.packager(), () => builder.build(configer.builder(), done)));
