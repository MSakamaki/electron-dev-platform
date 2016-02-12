
// ENVIRONMENT=dist electron dest/platform/index.js
// script src <script src="./app.js"></script> only
import env from '../env';

const gutil = require('gulp-util');
const gulp = require('gulp');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');

const packager = require('electron-packager');

const archive = 'dest/asar/ex.asar';
const appName = 'exampleApp';
const Readable = require('stream').Readable;
gulp.task('build', cb=>
  runSequence(
    'clean',
    ['ts', 'jspm_bundle', 'copy:browser', 'writePackageJson'],
    'pack',
    'electron_installer',
    cb));

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
  return string_src("package.json", pkg)
    .pipe(gulp.dest(env.dir.compile))
})

// 仮

// SetFile -c icnC /<your path>/.VolumeIcon.icns
gulp.task('electron_installer', ()=>exec(`electron-builder dest/pack/exampleApp-darwin-x64/exampleApp.app --platform=osx --out=dist --config=./electron.config.json`));

gulp.task('pack', ()=>exec(`electron-packager ${env.dir.compile} ${appName} --platform=darwin --arch=x64 --version=0.36.7 --out=dest/pack`));


