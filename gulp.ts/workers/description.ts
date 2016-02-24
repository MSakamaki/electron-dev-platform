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
      'test',
      'e2e',
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
      default: 'default task',
      e2e: 'end to end testing',
      'exec:electron': 'execute electron application',
      h: 'alias for help command',
      hdep: 'gulp task dependency',
      help: 'guide of gulp commands',
      hls: 'guide of gulp all commands',
      'jasmine:platform': 'electron platform unit testing',
      jspmBundle: 'src/browser code of jspm bundle tasks',
      'pack:osx': '[inner command]packageing osx 64bit platform',
      'pack:win': '[inner command]packageing win 64bit platform',
      'pack:win32': '[inner command]packageing win 32bit platform',
      serve: 'start livereload development',
      test: 'unit and behavior testing',
      ts: ' typescript compile from src/platform/* dir',
      'ts:unit': 'typescript compile form src/platform/*.spec.ts dir',
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
