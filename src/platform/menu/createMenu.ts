/// <reference path="../../../typings/github-electron/github-electron.d.ts" />
/// <reference path="../../../typings/node/node.d.ts" />
/// <reference path="../config/env.d.ts" />

import * as common from '../config/env';
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
      //this.electron = electron;
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
          message: "There are updates",
          detail: "install and reboot.",
          buttons: ["reboot", "For later"]
        });
        if (index === 0) {
          autoUpdater.quitAndInstall();
        }
      });
      autoUpdater.on("update-not-available", () => {
        dialog.showMessageBox({
          message: "There are no updates",
          buttons: ["OK"]
        });
      });
      autoUpdater.on("error", () => {
        dialog.showMessageBox({
          message: "update error has occurred",
          buttons: ["OK"]
        });
      });
    }

    clickQuit(item: Electron.MenuItem, focusedWindow: Electron.WebContents) {
      this.electron.app.quit();
    }
  }

  /**
   * https://github.com/atom/electron/blob/master/docs/api/tray.md
   */
  export class Context {
    constructor(private electron: Electron.ElectronMainAndRenderer) {
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