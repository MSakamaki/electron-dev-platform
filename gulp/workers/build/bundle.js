import env from '../../env';

const gutil = require('gulp-util');
const gulp = require('gulp');
const exec = require('child_process').exec;
const Readable = require('stream').Readable;

gulp.task('jspmBundle', ()=>exec(`jspm build app ${env.dir.compile}/browser/app.js`));

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
  return string_src("package.json", pkg)
    .pipe(gulp.dest(env.dir.compile))
});


