/// <reference path="../../typings/github-electron/github-electron.d.ts" />
/// <reference path="../../typings/node/node.d.ts" />
/// <reference path="./config/env.d.ts" />
/// <reference path="./config/env.ts" />

const envConfig = Config.env;
const path = require('path');
// electron API : https://github.com/atom/electron/tree/master/docs/api
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const appEnv = process.env.ENVIRONMENT || 'dist';

class Application {

   private mainWindow: Electron.BrowserWindow;
   private Menu = electron.Menu;
   private appUrl: string;

   constructor(public app: Electron.App){
       this.app.on('window-all-closed', this.windowAllClosed);
       this.app.on('ready', this.ready);
       this.app.on('activate', this.activate);
   }
    
   ready() {
      this.mainWindow = new BrowserWindow({width: 800, height: 600});

      this.appUrl = `file://${path.join(__dirname, envConfig[appEnv].src, 'browser/index.html')}`;

      this.mainWindow.loadURL(this.appUrl);
      // debug
      envConfig[appEnv].debug(this.mainWindow.webContents);

      this.mainWindow.on('closed', function() {
            this.mainWindow = null;
      });
   }
    
   windowAllClosed() {
     if (process.platform !== 'darwin') {
       this.app.quit();
     }
   }

   activate() {
     if (this.mainWindow === null) {
      this.ready();
    }
  }
}

const _APP = new Application(app);