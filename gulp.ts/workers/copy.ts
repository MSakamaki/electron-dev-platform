/// <reference path="../../typings/tsd.d.ts"/>

import env from '../env';
(()=>{
  
const gulp = require('gulp');
const replace = require('gulp-replace');
const useref = require('gulp-useref');

  gulp.task('copy:browser', ()=>
    gulp.src(env.src.browser.html)
    // .pipe(replace(new RegExp('(<!-- jspm:application -->|<script.*</script>)', 'g'), (i)=> {
    //   if (i === '<!-- jspm:application -->') {
    //     return '<script src="./app.js"></script>';
    //   }

    //   return '';
    // }))
    .pipe(useref())
    .pipe(gulp.dest(`${env.dir.compile}/browser`)));

  gulp.task('copy:assets', ()=>
    gulp.src(env.src.platform.asset)
    .pipe(gulp.dest(`${env.dir.compile}/assets`)));
})();