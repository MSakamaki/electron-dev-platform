import env from '../env';

const gulp = require('gulp');
const ts = require('gulp-typescript');
 
gulp.task('ts', function () {
	return gulp.src('src/platform/**/*.ts')
		.pipe(ts({
			noImplicitAny: true,
			out: 'index.js'
		}))
		.pipe(gulp.dest(env.dir.compile));
});