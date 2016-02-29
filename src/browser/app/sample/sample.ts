/// <reference path="../../../../typings/github-electron/github-electron.d.ts" />

declare var Notification:any;

// Electron
const remote:Electron.Remote = require("remote");

export namespace myFunction {
  export function callRemoteFnc (): string {
    return remote.require("./remote/sample").Hello('WORLD');
  }
  
  export function callRemoteValue(): string {
    var global = remote.getGlobal('shaerd');
    return `HELLO ${global ? global.message : '-- non message --'} APP !`
  }
  
  export function callWebNotification(): void {
    new Notification("test notify");
  }
}