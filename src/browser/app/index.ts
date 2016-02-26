/// <reference path="../../../typings/github-electron/github-electron.d.ts" />

import './main.css!';

// Element
const app:HTMLDivElement = <HTMLDivElement>document.querySelector('#app');
const btn1:HTMLButtonElement = <HTMLButtonElement>document.querySelector('#btn1');
const btn2:HTMLButtonElement = <HTMLButtonElement>document.querySelector('#btn2');
const btn3:HTMLButtonElement = <HTMLButtonElement>document.querySelector('#btn3');
// Electron
const remote:Electron.Remote = require("remote");
const remoteSample = remote.require("./remote/sample");

app.textContent = `HELLO ${platformMessage()} APP !`;

// shaerd data
function platformMessage(){
  var global = require('remote').getGlobal('shaerd');
  return global ? global.message : '-- non message --';
}

btn1.addEventListener('click', ()=>{
  var hellocall = remoteSample.Hello('WORLD');
  console.log(hellocall);  
});

btn2.addEventListener('click', ()=>{
  app.textContent = `HELLO ${platformMessage()} APP !`;
});

declare var Notification:any;
btn3.addEventListener('click', ()=>{
  // window 10 or osx only
  // https://github.com/atom/electron/blob/master/docs/tutorial/desktop-environment-integration.md#notifications-windows-linux-os-x
  var n = new Notification("test notify");
});

