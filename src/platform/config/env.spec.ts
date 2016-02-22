/// <reference path="../../../typings/node/node.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="./env.d.ts" />

import * as common from '../config/env';

describe("A suite", function() {
  const envConf: common.Config.envConfigs = common.Config.env;
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  it("contains spec with an expectation", function() {
    expect(envConf).toBeDefined();
  });
});

