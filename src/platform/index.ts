/// <reference path="../../typings/github-electron/github-electron.d.ts" />
/// <reference path="../../typings/node/node.d.ts" />
/// <reference path="./config/env.d.ts" />
/// <reference path="./menu/createMenu.d.ts" />
/// <reference path="./menu/createMenu.ts" />


// electron API : https://github.com/atom/electron/tree/master/docs/api
const electron: Electron.ElectronMainAndRenderer = require('electron');

import * as Content from './application/application';

const main = new Content.Application.Main(electron);
