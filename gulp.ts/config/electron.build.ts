/// <reference path="../../typings/tsd.d.ts"/>

const APPLICATION_TITILE = 'Electron Builder Example';

const ELECTRON_CONF = {
  osx: {
    title: APPLICATION_TITILE,
    background: 'src/assets/osx/installer.png',
    icon: 'src/assets/osx/mount.icns',
    'icon-size': 80,
    contents: [
      { x: 210, y: 100, type: 'link', path: '/Applications' },
      { x: 80, y: 100, type: 'file' },
    ],
  },
  win: {
    title: APPLICATION_TITILE,
    icon: 'src/assets/win/icon.ico',
  },
};

export default ELECTRON_CONF;
