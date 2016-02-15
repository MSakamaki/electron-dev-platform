import env from '../env';

const gulp = require('gulp');
// https://github.com/Microsoft/TypeScript/wiki/tsconfig.json
const ts = require('gulp-typescript');
const concat = require('gulp-concat');
 
const platConfig = require('../../src/platform/tsconfig.json');
 
gulp.task('ts', function () {
	return gulp.src('src/platform/**/*.ts')
		.pipe(ts(platConfig.compilerOptions))
        .pipe(concat('index.js'))
		.pipe(gulp.dest(env.dir.compile));
});