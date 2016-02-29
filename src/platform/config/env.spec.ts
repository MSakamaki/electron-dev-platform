/// <reference path="../../../typings/node/node.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="./env.d.ts" />

import * as common from '../config/env';

describe("config/env suite", function() {
  const envConf: common.Config.envConfigs = common.Config.env;
  let ConfigItem:common.Config.envConfigItem;
  let webCont: Electron.WebContents;
  
  beforeEach(()=>{
      const electron = require('electron');
      var w = new electron.BrowserWindow({
        show: false,
        width: 400,
        height: 400
      });
      webCont = w.webContents;
  });

  it("check config", function() {
    expect(envConf).toBeDefined();
  });

  describe('dev', ()=>{
    beforeEach(()=>{
      ConfigItem = envConf['dev'];
    });
    it("check debuging", function() {
      webCont.openDevTools = jasmine.createSpy('openDevTools');
      ConfigItem.debug(webCont);
      expect(webCont.openDevTools).toHaveBeenCalled();
    });
  });

  describe('dist', ()=>{
    beforeEach(()=>{
      ConfigItem = envConf['dist'];
    });
    it("check debuging", function() {
      webCont.openDevTools = jasmine.createSpy('openDevTools');
      ConfigItem.debug(webCont);
      expect(webCont.openDevTools).not.toHaveBeenCalled();
    });
  });
  
  
});

