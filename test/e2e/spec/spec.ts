/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../po/main.po.d.ts" />

import {Main} from '../po/main.po';

describe('angularjs homepage todo list', function() {
  let main = new Main.topView();
  beforeEach(function() {
    return browser.ignoreSynchronization = true;
  });
  it('should add a todo', done=> {

    browser.wait(()=>main.elmHello.isPresent(), 10000, 'not app id')
      .then(()=>{
          expect(main.elmHello.getInnerHtml()).toBe('SAMPLE CODE');
      })
      .then(done);
  });
});