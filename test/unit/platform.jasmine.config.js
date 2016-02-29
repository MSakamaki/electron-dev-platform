const electron = require('electron');
const Jasmine = require('jasmine');
const jasmine = new Jasmine();

function init() {
  console.log('start jasmine');
  jasmine.loadConfig({
    spec_dir: 'dest/unit',
    spec_files: [
      'config/**/*.spec.js'
    ]
  });

  jasmine.onComplete(function (passed) {
    if (passed) {
      console.log('All specs have passed');
    }
    else {
      console.log('At least one spec has failed');
    }
    console.log('start exit');
    electron.app.quit();
  });
  jasmine.execute();

}

electron.app.on('ready', init);
