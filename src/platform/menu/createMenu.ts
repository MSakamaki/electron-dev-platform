/// <reference path="../../../typings/github-electron/github-electron.d.ts" />
/// <reference path="../../../typings/node/node.d.ts" />
/// <reference path="../config/env.d.ts" />
/// <reference path="../config/env.ts" />

module SystemMenu {

  let appEnv: string = process.env.ENVIRONMENT || 'dist';
  const envConf: Config.envConfigItem = Config.env[appEnv];

  export class Application {
    constructor(private electron: Electron.ElectronMainAndRenderer) {
      var menu: Electron.Menu = electron.Menu.buildFromTemplate([
        {
          label: 'exampleApp',
          submenu: [
            { label: 'SwitchDevTool', click: this.clickDevTools },
            { label: 'Quit', click: this.clickQuit },
          ]
        },
        {
          label: 'File',
          submenu: [
            { label: 'New File' },
            { label: 'Paste' }
          ]
        },
      ]);
      electron.Menu.setApplicationMenu(menu);
    }

    clickDevTools(item: Electron.MenuItem, focusedWindow: Electron.WebContents) {
      if (focusedWindow) {
        focusedWindow.toggleDevTools();
      }
    }

    clickQuit(item: Electron.MenuItem, focusedWindow: Electron.WebContents) {
      electron.app.quit();
    }
  }

  /**
   * https://github.com/atom/electron/blob/master/docs/api/tray.md
   */
  export class Context {
    constructor(private electron: Electron.ElectronMainAndRenderer) {
      var appIcon: Electron.Tray = new electron.Tray(`${__dirname}/assets/icon.png`);
      var contextMenu: any = electron.Menu.buildFromTemplate([
        { label: 'context 1', type: 'radio' },
        { label: 'context 2', type: 'radio' },
        { label: 'context 3', type: 'radio', checked: true },
        { label: 'context 4', type: 'radio' }
      ]);
      appIcon.setToolTip('This is my application.');
      appIcon.setContextMenu(contextMenu);
    }
  }
}