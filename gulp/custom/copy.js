const gulp = require('gulp');
 
gulp.task( 'copy', ()=>gulp.src( 'src/**/*.html'  ).pipe( gulp.dest( '.build') ));
