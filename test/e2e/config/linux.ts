/// <reference path="../../../typings/tsd.d.ts" />

exports.config = {
  directConnect: true,
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      // linux x64
      binary: `${process.cwd()}/dest/pack/exampleApp-linux-x64/exampleApp`,
    },  
  }
};