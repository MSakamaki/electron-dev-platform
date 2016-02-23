exports.config = {
  directConnect: true,
  specs: [`${process.cwd()}/protractor/spec/spec.js`],
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      // https://github.com/atom/electron/blob/master/docs/tutorial/using-selenium-and-webdriver.md
      // mac osx
      binary: `${process.cwd()}/dest/pack/exampleApp-darwin-x64/exampleApp.app/Contents/MacOS/Electron`,
    },  
  }
};