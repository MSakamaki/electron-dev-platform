/// <reference path="../../../typings/tsd.d.ts" />

const packageJson = require('../../../package.json');

exports.config = {
  directConnect: true,
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      // linux x64
      binary: `${process.cwd()}/dest/pack/${packageJson.name}-linux-x64/${packageJson.name}`,
    },  
  }
};