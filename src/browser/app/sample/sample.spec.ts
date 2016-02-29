/// <reference path="../../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../../typings/github-electron/github-electron.d.ts" />

declare var Notification:any;

import * as Sample from './sample.ts';


describe("sample/myFunction", function() {
  
  it("callRemoteFnc", () => {
    var remote = require("remote");
    remote.require = jasmine.createSpy('spy').and.returnValue({
        Hello: ()=> 'hello-world',
      });
    expect(Sample.myFunction.callRemoteFnc()).toBe('hello-world');
    expect(remote.require).toHaveBeenCalled();
    expect(remote.require).toHaveBeenCalledWith('./remote/sample');
  });
  
  it("callRemoteValue", () => {
    var remote = require("remote");
    remote.getGlobal = jasmine.createSpy('spy')
      .and.returnValue({ message: 'get message test' });
    expect(Sample.myFunction.callRemoteValue()).toBe('HELLO get message test APP !');
    expect(remote.getGlobal).toHaveBeenCalled();
    expect(remote.getGlobal).toHaveBeenCalledWith('shaerd');
  });

  it("callWebNotification", () => {
    spyOn(window, 'Notification');
    Sample.myFunction.callWebNotification()
    expect(Notification).toHaveBeenCalled();
    expect(Notification).toHaveBeenCalledWith('test notify');
  });
});
