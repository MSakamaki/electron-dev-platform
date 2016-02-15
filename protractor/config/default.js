exports.config = {
  directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['/Users/msakamaki/project/electron/electron-platform/protractor/spec/spec.js'],
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      binary: '/Users/msakamaki/project/electron/electron-platform/dest/pack/exampleApp-darwin-x64/exampleApp.app/Contents/MacOS/Electron'
    },  
  },
//   onPrepare: function () {
//     browser.resetUrl = "file://";
//   }
};