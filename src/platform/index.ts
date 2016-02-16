/// <reference path="../../typings/github-electron/github-electron.d.ts" />
/// <reference path="../../typings/node/node.d.ts" />
/// <reference path="./config/env.d.ts" />
/// <reference path="./config/env.ts" />
/// <reference path="./menu/createMenu.ts" />
/// <reference path="./menu/createMenu.d.ts" />

const envConfig = Config.env;
const path = require('path');
// electron API : https://github.com/atom/electron/tree/master/docs/api
const electron = require('electron');
const appEnv = process.env.ENVIRONMENT || 'dist';

class Main {

  private mainWindow: Electron.BrowserWindow;
  private appUrl: string;

  constructor(public electron: Electron.ElectronMainAndRenderer) {
    this.electron.app.on('window-all-closed', this.windowAllClosed);
    this.electron.app.on('ready', this.ready);
    this.electron.app.on('activate', this.activate);
  }

  ready() {
    this.mainWindow = new electron.BrowserWindow({ width: 800, height: 600 });

    this.appUrl = `file://${path.join(__dirname, envConfig[appEnv].src, 'browser/index.html')}`;

    this.mainWindow.loadURL(this.appUrl);
    // debug
    envConfig[appEnv].debug(this.mainWindow.webContents);

    // create menu
    const menuApp = new SystemMenu.Application(electron);
    //const menuContext = new SystemMenu.Context(electron);

    this.mainWindow.on('closed', function() {
      this.mainWindow = null;
    });
  }

  windowAllClosed() {
    if (process.platform !== 'darwin') {
      electron.app.quit();
    }
  }

  activate() {
    if (this.mainWindow === null) {
      this.ready();
    }
  }
}

const main = new Main(electron);