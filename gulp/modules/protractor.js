const gulp = require('gulp');
const protractor = require("gulp-protractor").protractor;
const webdriver_update = require("gulp-protractor").webdriver_update;

gulp.task('webdriver_update', webdriver_update);

gulp.task('e2e', ['webdriver_update'],()=>{

  return gulp.src(["./protractor/spec/*.js"])
    .pipe(protractor({
        configFile: "./protractor/config/default.js"
    }))
    .on('error', function(e) { throw e });
});