/// <reference path="../../typings/github-electron/github-electron.d.ts" />
/// <reference path="../../typings/node/node.d.ts" />

const path = require('path');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// https://github.com/atom/electron/blob/master/docs/api/browser-window.md
let mainWindow: Electron.BrowserWindow;
// https://github.com/atom/electron/blob/master/docs/api/web-contents.md
//let webCnt: Electron.WebContents; 

let appEnv: string = process.env.ENVIRONMENT || 'dist';

let envConfig: {
    [index: string]: {
        src: string;
        debug: (webContents :Electron.WebContents) => any;
    }
} = {
    dev: {
        src : '../../src',
        debug: (webContents :Electron.WebContents)=> webContents.openDevTools(),
    },
    dist: {
        src: '.',
        debug: (webContents :Electron.WebContents)=> void 0,
    }
};


let appUrl: string = `file://${path.join(__dirname, envConfig[appEnv].src, 'browser/index.html')}`;

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadURL(appUrl);
  // debug
  envConfig[appEnv].debug(mainWindow.webContents);

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});