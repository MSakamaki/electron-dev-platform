/// <reference path="../../typings/tsd.d.ts" />

export namespace Main {
  export class topView {
    public elmHello: protractor.ElementFinder;
    public btn1: protractor.ElementFinder;
    public btn2: protractor.ElementFinder;
    constructor(){
      this.elmHello = element(by.css('#app'));
      this.btn1 = element(by.css('#btn1'));
      this.btn2 = element(by.css('#btn2'));
    }
  }
}