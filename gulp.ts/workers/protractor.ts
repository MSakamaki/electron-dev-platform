/// <reference path="../../typings/tsd.d.ts"/>

(() => {
  const gulp = require('gulp');
  const protractor = require('gulp-protractor').protractor;
  const webdriverUpdate = require('gulp-protractor').webdriver_update;

  gulp.task('webdriverUpdate', webdriverUpdate);

  gulp.task('protractor', ['webdriverUpdate'], () => {

    return gulp.src(['./dest/e2e/spec/**/*.js'])
      .pipe(protractor({
        configFile: './dest/e2e/config/default.js',
      }))
      .on('error', (e) => { throw e });
  });

})();
