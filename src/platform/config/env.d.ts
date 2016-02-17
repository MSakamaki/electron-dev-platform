/// <reference path="../../../typings/github-electron/github-electron.d.ts" />
/// <reference path="../../../typings/node/node.d.ts" />
declare module "Config" {
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
