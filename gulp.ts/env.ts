/// <reference path="../typings/tsd.d.ts"/>

import APP_CONF from './config/electron.build';
import JASMINE_CONF from './config/jasmine';
import PATH from './config/rootPaths';
import SOURCE from './config/srouces';

const packageJson = require('../package.json');

const extension = {
  'darwin': 'app',
  'win32': 'exe',
}

const env = {
  app:{
      version: packageJson.version,
      name: packageJson.name,
  },
  jasmine:JASMINE_CONF,
  dir: PATH,
  src: SOURCE,
  electron: {
    appName: 'exampleApp',
    version: '0.36.8',
    buildName: (platform, arch) => {
      let ElectronPlatformPath = {
        win32:`${env.electron.appName}-${platform}-${arch}/`,
        darwin: `${env.electron.appName}-${platform}-${arch}/${env.electron.appName}.${extension[platform]}`,
      };
      return ElectronPlatformPath[platform];
    },
    config: APP_CONF,
  },
  file: {
    concat: 'index.js',
  },
};
export default env;