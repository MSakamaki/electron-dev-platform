/// <reference path="../../../typings/github-electron/github-electron.d.ts" />
/// <reference path="../../../typings/node/node.d.ts" />
export declare namespace Config {
    var env: envConfigs;
    interface envConfigs {
        [index: string]: envConfigItem;
    }
    interface envConfigItem {
        src: string;
        assetDir: string;
        debug: (webContents: Electron.WebContents) => any;
    }
}
