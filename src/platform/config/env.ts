/// <reference path="../../../typings/github-electron/github-electron.d.ts" />
/// <reference path="../../../typings/node/node.d.ts" />
export namespace Config {
    export var env: envConfigs = {
      dev: {
        src: '../../src',
        assetDir: '../assets/common',
        debug: (webContents: Electron.WebContents) => webContents.openDevTools(),
      },
      dist: {
        src: '.',
        assetDir: 'assets',
        debug: (webContents: Electron.WebContents) => void 0,
      }
    }

    export interface envConfigs {
      [index: string]: envConfigItem
    }

    export interface envConfigItem {
      src: string;
      assetDir: string;
      debug: (webContents: Electron.WebContents) => any;
    }
//  }
}