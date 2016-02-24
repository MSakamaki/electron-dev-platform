/// <reference path="../../typings/tsd.d.ts"/>

import {RootPathInf} from './_interfacees';

const ROOT_PATH: RootPathInf = {
  root: process.cwd(),
  browser: 'src/browser',
  assets: 'src/assets',
  platform: 'src/platform',
  gulp: 'gulp',
  dest: 'dest',
  dist: 'dist',
  compile: 'dest/compile',
  pack: 'dest/pack',
};

export default ROOT_PATH;
