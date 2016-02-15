/// <reference path="../../../typings/github-electron/github-electron.d.ts" />
/// <reference path="../../../typings/node/node.d.ts" />
declare module "Config" {
    var env: envConfigInterface;
    interface envConfigInterface {
        [index: string]: {
            src: string;
            debug: (webContents: Electron.WebContents) => any;
        };
    }
}
