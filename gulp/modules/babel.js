// import env from '../env';

// const gulp = require('gulp');
// const sourcemaps = require('gulp-sourcemaps');
// const babel = require('gulp-babel');
// const concat = require('gulp-concat');
// const livereload = require('gulp-livereload');

// gulp.task('babel', () => gulp.src(`${env.dir.src}/**/*.js`)
//       .pipe(sourcemaps.init())
//         .pipe(babel({
//           presets: ['es2015'],
//         }))
//         .pipe(concat(env.file.concat))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest(env.dir.build))
//         .pipe(livereload()));
