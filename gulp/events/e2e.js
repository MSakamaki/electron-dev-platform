const gulp = require('gulp');
const protractor = require('gulp-protractor').protractor;

// jscs:disable
const webdriverUpdate = require('gulp-protractor').webdriver_update;

// jscs:enable

gulp.task('webdriverUpdate', webdriverUpdate);

gulp.task('e2e', ['webdriverUpdate'], ()=> {

  return gulp.src(['./protractor/spec/*.js'])
    .pipe(protractor({
      configFile: './protractor/config/default.js',
    }))
    .on('error', function (e) { throw e; });
});
