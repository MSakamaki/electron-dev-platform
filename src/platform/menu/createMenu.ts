/// <reference path="../../../typings/github-electron/github-electron.d.ts" />
/// <reference path="../../../typings/node/node.d.ts" />
/// <reference path="../config/env.d.ts" />

import * as common from '../config/env';

let _electron: Electron.ElectronMainAndRenderer;
const path = require('path');

export namespace SystemMenu {
  let appEnv: string = process.env.ENVIRONMENT || 'dist';
  const envConf: common.Config.envConfigItem = common.Config.env[appEnv];

  export class Application {
    constructor(public electron: Electron.ElectronMainAndRenderer) {
      var menu: Electron.Menu = electron.Menu.buildFromTemplate([
        {
          label: 'exampleApp',
          submenu: [
            { label: 'SwitchDevTool', click: this.clickDevTools.bind(this) },
            { label: 'cngBroserMsg', click: this.cngBroserMsg.bind(this) },
            { label: 'checkUpdate', click: this.checkUpdate.bind(this) },
            { label: 'Quit', click: this.clickQuit.bind(this) },
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
      _electron = electron;
    }

    clickDevTools(item: Electron.MenuItem, focusedWindow: Electron.WebContents) {
      if (focusedWindow) {
        focusedWindow.toggleDevTools();
      }
    }

    cngBroserMsg(item: Electron.MenuItem, focusedWindow: Electron.WebContents) {
      (<any>global).shaerd = {
        message: 'default value'
      };
      interface shaerd {
        src: string;
        assetDir: string;
        debug: (webContents: Electron.WebContents) => any;
      }
    }

    checkUpdate(item: Electron.MenuItem, focusedWindow: Electron.WebContents) {
      const {autoUpdater, dialog} = require("electron");
      autoUpdater.setFeedURL(`http://localhost:8080/api/update/${process.platform}`);
      autoUpdater.checkForUpdates();
      autoUpdater.on("update-downloaded", () => {
        let index = dialog.showMessageBox({
          message: "アップデートあり",
          detail: "再起動してインストールできます。",
          buttons: ["再起動", "後で"]
        });
        if (index === 0) {
          autoUpdater.quitAndInstall();
        }
      });
      autoUpdater.on("update-not-available", () => {
        dialog.showMessageBox({
          message: "アップデートはありません",
          buttons: ["OK"]
        });
      });
      autoUpdater.on("error", () => {
        dialog.showMessageBox({
          message: "アップデートエラーが起きました",
          buttons: ["OK"]
        });
      });
      //autoUpdater.quitAndInstall();
    }

    clickQuit(item: Electron.MenuItem, focusedWindow: Electron.WebContents) {
      _electron.app.quit();
    }
  }

  /**
   * https://github.com/atom/electron/blob/master/docs/api/tray.md
   */
  export class Context {
    constructor(private electron: Electron.ElectronMainAndRenderer) {
      //var appIcon: Electron.Tray = new electron.Tray(`${__dirname}/assets/icon.png`);
      //var appIcon: Electron.Tray = new electron.Tray(`/Users/msakamaki/project/electron/electron-platform/dest/compile/assets/icon.png`);
      var appIcon: Electron.Tray = new electron.Tray(path.join(__dirname, '..', 'assets', 'icon.png'));
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