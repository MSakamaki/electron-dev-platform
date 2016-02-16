const APPLICATION_TITILE = 'Electron Builder Example';

const ELECTRON_CONF = {
    osx : {
        title: APPLICATION_TITILE,
        background: 'assets/images/installer.png',
        icon: 'assets/images/mount.icns',
        'icon-size': 80,
        contents: [
          { x: 210, y: 100, type: 'link', path: '/Applications' },
          { x: 80, y: 100, type: 'file' }
        ]
    },
    win : {
        title : APPLICATION_TITILE,
        icon : 'assets/images/icon.ico'
    }
}

export default ELECTRON_CONF;