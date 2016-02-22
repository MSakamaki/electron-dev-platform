/// <reference path="../../../typings/github-electron/github-electron.d.ts" />
/// <reference path="../../../typings/node/node.d.ts" />
/// <reference path="../config/env.d.ts" />
var common = require('../config/env');
var _electron;
var SystemMenu;
(function (SystemMenu) {
    var appEnv = process.env.ENVIRONMENT || 'dist';
    var envConf = common.Config.env[appEnv];
    var Application = (function () {
        function Application(electron) {
            this.electron = electron;
            var menu = electron.Menu.buildFromTemplate([
                {
                    label: 'exampleApp',
                    submenu: [
                        { label: 'SwitchDevTool', click: this.clickDevTools.bind(this) },
                        { label: 'Quit', click: this.clickQuit.bind(this) },
                    ]
                },
                {
                    label: 'File',
                    submenu: [
                        { label: 'New File' },
                        { label: 'Paste' }
                    ]
                },
            ]);
            electron.Menu.setApplicationMenu(menu);
            _electron = electron;
        }
        Application.prototype.clickDevTools = function (item, focusedWindow) {
            if (focusedWindow) {
                focusedWindow.toggleDevTools();
            }
        };
        Application.prototype.clickQuit = function (item, focusedWindow) {
            _electron.app.quit();
        };
        return Application;
    })();
    SystemMenu.Application = Application;
    /**
     * https://github.com/atom/electron/blob/master/docs/api/tray.md
     */
    var Context = (function () {
        function Context(electron) {
            this.electron = electron;
            //var appIcon: Electron.Tray = new electron.Tray(`${__dirname}/assets/icon.png`);
            var appIcon = new electron.Tray("/Users/msakamaki/project/electron/electron-platform/dest/compile/assets/icon.png");
            var contextMenu = electron.Menu.buildFromTemplate([
                { label: 'context 1', type: 'radio' },
                { label: 'context 2', type: 'radio' },
                { label: 'context 3', type: 'radio', checked: true },
                { label: 'context 4', type: 'radio' }
            ]);
            appIcon.setToolTip('This is my application.');
            appIcon.setContextMenu(contextMenu);
        }
        return Context;
    })();
    SystemMenu.Context = Context;
})(SystemMenu = exports.SystemMenu || (exports.SystemMenu = {}));
