/// <reference path="../../typings/tsd.d.ts"/>

import {ElectronConfInf} from './_interfacees';
import ELECTRON_DEFAULT_CONF from './electron.config';

const ELECTRON_CONF: ElectronConfInf = {
  osx: {
    title: 'Electron Builder Example',
    background: 'src/assets/osx/installer.png',
    icon: ELECTRON_DEFAULT_CONF.darwin.icon,
    'icon-size': 80,
    contents: [
      { x: 210, y: 100, type: 'link', path: '/Applications' },
      { x: 80, y: 100, type: 'file' },
    ],
  },
};

export default ELECTRON_CONF;

