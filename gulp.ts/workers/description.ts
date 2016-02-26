/// <reference path="../../typings/tsd.d.ts"/>

(() => {
  const gulp = require('gulp');
  const gulpDep = require('gulp-description');
  const description = {
    main: [
      'serve',
      'build:compile',
      'build:osx',
      'build:win',
      'build:win32',
      'help',
      'hls',
      'test',
      'e2e:linux',
      'e2e:osx',
      'updatemock:win32',
    ],
    description: {
      'build:compile': 'compile build',
      'build:osx': 'packaging for mac osx 64bit',
      'build:win': 'packaging for windows os 64bit',
      'build:win32': 'packaging for windows os 32bit',
      'clean:build': 'packaging directory clean',
      'clean:compile': 'compile directory clean',
      'clean:unit': 'unit test directory clean',
      'copy:assets': 'copy src/assets file',
      'copy:browser': 'copy src/browser file',
      default: 'default task (gulp help)',
      'e2e:linux': 'end to end testing for linux platform',
      'e2e:osx': 'end to end testing for osx platform',
      'exec:electron': 'execute electron application',
      h: 'alias for help command',
      hdep: 'gulp task dependency',
      help: 'guide of gulp commands',
      hls: 'guide of gulp all commands',
      'installer:osx':'[inner command]create installer for osx 64bit platform',
      'installer:win':'[inner command]create installer for windows 64bit platform',
      'installer:win32':'[inner command]create installer for windows 32bit platform',
      'jasmine:platform': 'electron platform unit testing',
      jspmBundle: 'src/browser code of jspm bundle tasks',
      'mock:server': 'runing mock http server',
      'pack:linux': '[inner command]packageing linux 64bit platform',
      'pack:osx': '[inner command]packageing osx 64bit platform',
      'pack:win': '[inner command]packageing win 64bit platform',
      'pack:win32': '[inner command]packageing win 32bit platform',
      'protractor:linux':'execute protractor from linux platform',
      'protractor:osx':'execute protractor from osx platform',
      serve: 'start livereload development',
      test: 'unit and behavior testing',
      ts: ' typescript compile from src/platform/* dir',
      'ts:e2e': 'typescript compile form protractor/**/*.ts files',
      'ts:unit': 'typescript compile form src/platform/*.spec.ts files',
      'updatemock:win32': 'start of update serve mock',
      watch: 'src/browser/* files watch tasks',
      webdriverUpdate: 'webdriver update',
      writePackageJson: 'package.json of created for the electron',
    },
  };

  gulp.task('help', () => gulpDep.help(description));
  gulp.task('h', () => gulpDep.help(description));
  gulp.task('hls', () => gulpDep.all(description));
  gulp.task('hdep', () => gulpDep.dependency(description));

})();
