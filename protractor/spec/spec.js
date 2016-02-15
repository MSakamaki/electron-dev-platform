/// <reference path="../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../typings/angular-protractor/angular-protractor.d.ts" />
/// <reference path="../../typings/selenium-webdriver/selenium-webdriver.d.ts" />

console.log('load')

describe('angularjs homepage todo list', function() {
  beforeEach(function() {
    return browser.ignoreSynchronization = true;
  });
  it('should add a todo', done=> {
    var elmHello = element(by.css('#app'));
    browser.wait(()=>elmHello.isPresent(), 10000, 'not app id')
      .then(()=>{
          expect(elmHello.getText()).toBe('HELLO BABEL APP !');
          done();
      });
  });
});