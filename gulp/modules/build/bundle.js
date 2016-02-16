import env from '../../env';

const gutil = require('gulp-util');
const gulp = require('gulp');
const exec = require('child_process').exec;
const Readable = require('stream').Readable;

gulp.task('jspm_bundle', ()=>exec(`jspm bundle-sfx app ${env.dir.compile}/browser/app.js`));

function string_src(filename, pkg) {
  var src = new Readable({ objectMode: true })
  pkg.main = 'index.js';
  src._read = function () {
    this.push(new gutil.File({
        cwd: "",
        base: "",
        path: filename,
        contents: new Buffer(JSON.stringify(pkg))
    }));
    this.push(null);
  }
  return src;
}

gulp.task('writePackageJson', function () {
  var pkg = require(`${process.cwd()}/package.json`);
  console.log('pkg', env.dir.compile)
  return string_src("package.json", pkg)
  .pipe(require('gulp-debug')())
    .pipe(gulp.dest(env.dir.compile))
});


