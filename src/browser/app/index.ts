/// <reference path="../../../typings/github-electron/github-electron.d.ts" />

import './main.css!';
import * as Sample from './sample/sample';

// Element
const appTag:HTMLDivElement = <HTMLDivElement>document.querySelector('#app');
const btn1:HTMLButtonElement = <HTMLButtonElement>document.querySelector('#btn1');
const btn2:HTMLButtonElement = <HTMLButtonElement>document.querySelector('#btn2');
const btn3:HTMLButtonElement = <HTMLButtonElement>document.querySelector('#btn3');

btn1.addEventListener('click', ()=>console.log(Sample.myFunction.callRemoteFnc()));
btn2.addEventListener('click', ()=> appTag.textContent = Sample.myFunction.callRemoteValue());
btn3.addEventListener('click', ()=> Sample.myFunction.callWebNotification());
