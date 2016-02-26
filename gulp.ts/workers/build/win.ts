/// <reference path="../../../typings/tsd.d.ts"/>

import env from '../../env';
import Config from './config';

const gulp = require('gulp');
const packager = require('electron-packager');
const builder = require('electron-builder').init();
const grunt = require('grunt');

const confWin64 = new Config('x64','win32');
gulp.task('pack:win', done => packager(confWin64.packager(), done));
gulp.task('installer:win',   done => grunt.tasks(['create-windows-installer:x64'], {}, done));

const confWin32 = new Config('ia32','win32');
gulp.task('pack:win32', done => packager(confWin32.packager(), done));
gulp.task('installer:win32', done => grunt.tasks(['create-windows-installer:ia32'], {}, done));

grunt.task.init = function () { };

grunt.initConfig({
  'create-windows-installer': {
    x64: {
      appDirectory: 'dest/pack/exampleApp-win-x64',
      outputDirectory: '/tmp/build/installer64',
      authors: 'exampleApp',
      exe: 'exampleApp.exe',
    },
    ia32: {
      appDirectory: 'dest/pack/exampleApp-win32-ia32',
      outputDirectory: 'dist/installer32',
      authors: 'exampleApp',
      exe: 'exampleApp.exe',
    }
  }
});

grunt.loadNpmTasks('grunt-electron-installer');
