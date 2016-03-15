/// <reference path="../../../typings/tsd.d.ts" />

const packageJson = require('../../../package.json');

exports.config = {
  directConnect: true,
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      // https://github.com/atom/electron/blob/master/docs/tutorial/using-selenium-and-webdriver.md
      // mac osx
      binary: `${process.cwd()}/dest/pack/${packageJson.name}-darwin-x64/${packageJson.name}.app/Contents/MacOS/Electron`,
    },  
  }
};