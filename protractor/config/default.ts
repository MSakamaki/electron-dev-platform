/// <reference path="../../typings/tsd.d.ts" />

exports.config = {
  directConnect: true,
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      // https://github.com/atom/electron/blob/master/docs/tutorial/using-selenium-and-webdriver.md
      // mac osx
      binary: `${process.cwd()}/dest/pack/exampleApp-darwin-x64/exampleApp.app/Contents/MacOS/Electron`,
    },  
  }
};