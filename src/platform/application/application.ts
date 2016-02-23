/// <reference path="../../../typings/github-electron/github-electron.d.ts" />
/// <reference path="../../../typings/node/node.d.ts" />

import * as common from '../config/env';
import * as menu from '../menu/createMenu';

const path = require('path');
const appEnv: string = process.env.ENVIRONMENT || 'dist';
const envConf: common.Config.envConfigItem = common.Config.env[appEnv];

let Electron: Electron.ElectronMainAndRenderer;


export namespace Application {
  export class Main {

  private mainWindow: Electron.BrowserWindow;
  private appUrl: string;

  constructor(public electron: Electron.ElectronMainAndRenderer) {
    this.electron.app.on('window-all-closed', this.windowAllClosed);
    this.electron.app.on('ready', this.ready);
    this.electron.app.on('activate', this.activate);
    Electron = electron;
  }

  ready() {
    this.mainWindow = new Electron.BrowserWindow({ width: 800, height: 600 });

    this.appUrl = `file://${path.join(__dirname, envConf.src, 'browser/index.html')}`;

    this.mainWindow.loadURL(this.appUrl);
    // debug
    envConf.debug(this.mainWindow.webContents);

    // create menu
    const menuApp = new menu.SystemMenu.Application(Electron);
    const menuContext = new menu.SystemMenu.Context(Electron);

    this.mainWindow.on('closed', function() {
      this.mainWindow = null;
    });
  }

  windowAllClosed() {
    if (process.platform !== 'darwin') {
      this.electron.app.quit();
    }
  }

  activate() {
    if (this.mainWindow === null) {
      this.ready();
    }
  }
}
}