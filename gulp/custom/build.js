const gulp = require('gulp');

gulp.task('build', ['clean:build', 'babel', 'copy:build']);
