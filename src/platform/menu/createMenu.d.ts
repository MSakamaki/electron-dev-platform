/// <reference path="../../../typings/github-electron/github-electron.d.ts" />
/// <reference path="../../../typings/node/node.d.ts" />

declare module "SystemMenu" {
    class Application {
        private electron: Electron.ElectronMainAndRenderer;
        private appIcon;
        constructor(electron: Electron.ElectronMainAndRenderer);
    }
    class Context {
        private electron: Electron.ElectronMainAndRenderer;
        private appIcon;
        constructor(electron: Electron.ElectronMainAndRenderer);
    }
}
