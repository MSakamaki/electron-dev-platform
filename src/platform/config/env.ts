/// <reference path="../../../typings/github-electron/github-electron.d.ts" />
/// <reference path="../../../typings/node/node.d.ts" />

module Config {
    export var env : envConfigInterface = {
        dev: {
            src : '../../src',
            debug: (webContents :Electron.WebContents)=> webContents.openDevTools(),
        },
        dist: {
            src: '.',
            debug: (webContents :Electron.WebContents)=> void 0,
        }
    }

    export interface envConfigInterface {
        [index: string]: {
            src: string;
            debug: (webContents :Electron.WebContents) => any;
        }
    } 
}
  