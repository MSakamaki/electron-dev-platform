import env from '../../env';

const gulp = require('gulp');
const packager = require('electron-packager');
const builder = require('electron-builder').init();

gulp.task('electron_installer:win', done=>
  builder.build({
    appPath: `${env.dir.dest}/${env.electron.buildName('win32', 'x64') }`,
    platform: 'win',
    basePath: `${env.dir.root}`,
    out: env.dir.dist,
    config: env.electron.config,
  }, done));


gulp.task('pack:win', done => packager({
  dir: 'dist',
  out: env.dir.dest,
  name: env.electron.appName,
  arch: 'x64',
  platform: 'win32',
  version: env.electron.version,
}, done));
