/// <reference path="../../../typings/github-electron/github-electron.d.ts" />
/// <reference path="../../../typings/node/node.d.ts" />
/// <reference path="../config/env.d.ts" />
export declare namespace SystemMenu {
    class Application {
        electron: Electron.ElectronMainAndRenderer;
        constructor(electron: Electron.ElectronMainAndRenderer);
        clickDevTools(item: Electron.MenuItem, focusedWindow: Electron.WebContents): void;
        clickQuit(item: Electron.MenuItem, focusedWindow: Electron.WebContents): void;
    }
    /**
     * https://github.com/atom/electron/blob/master/docs/api/tray.md
     */
    class Context {
        private electron;
        constructor(electron: Electron.ElectronMainAndRenderer);
    }
}
