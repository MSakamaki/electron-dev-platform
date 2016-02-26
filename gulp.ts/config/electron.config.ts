/// <reference path="../../typings/tsd.d.ts"/>

import {electronDefaultConf} from './_interfacees';

const ELECTRON_DEFAULT_CONF: electronDefaultConf  = {
  darwin: {
    icon: 'src/assets/osx/sample.icns',
  },
  win32: {
    icon: 'src/assets/win/sample.ico',
  },
  linux: {
    icon: 'src/assets/win/sample.ico',
  },
};

export default ELECTRON_DEFAULT_CONF;
