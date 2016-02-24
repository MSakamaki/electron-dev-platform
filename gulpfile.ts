/// <reference path="./typings/tsd.d.ts"/>


const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const requireDir = require('require-dir');

gulpLoadPlugins();
requireDir('./gulp.ts',{recurse:true});

// gulp.task('default', () => {
//     console.log('call type script');
// });
