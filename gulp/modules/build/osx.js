import env from '../../env';

const gulp = require('gulp');
const packager = require('electron-packager');
const builder = require('electron-builder').init();

gulp.task('pack:osx', done => packager({
  dir: 'dist',
  out: env.dir.dest,
  name: env.electron.appName,
  arch: 'x64',
  platform: 'darwin',
  version: env.electron.version,
}, () => builder.build({
  appPath: `${env.dir.dest}/${env.electron.buildName('darwin', 'x64') }`,
  platform: 'osx',
  basePath: `${env.dir.root}`,
  out: env.dir.dist,
  config: env.electron.config,
}, done)));
