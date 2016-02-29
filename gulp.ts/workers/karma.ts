/// <reference path="../../typings/tsd.d.ts"/>

import env from '../env';

(() => {
  const gulp = require('gulp');
  const Server = require('karma').Server;

  gulp.task('karma:browser', done => {
    new Server({
        configFile: `${process.cwd()}/test/unit/browser.karma.config.js`,
      singleRun: true
    }, done).start();
  });
})();