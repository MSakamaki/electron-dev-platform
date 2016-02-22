/// <reference path="../../../typings/github-electron/github-electron.d.ts" />
/// <reference path="../../../typings/node/node.d.ts" />
export declare namespace Application {
    class Main {
        electron: Electron.ElectronMainAndRenderer;
        private mainWindow;
        private appUrl;
        constructor(electron: Electron.ElectronMainAndRenderer);
        ready(): void;
        windowAllClosed(): void;
        activate(): void;
    }
}
