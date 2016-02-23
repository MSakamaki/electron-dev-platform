module.exports = function (config) {
  config.set({
    browsers: ['Electron'],
    basePath: '../',
    frameworks: ['jspm', 'jasmine'],
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,

    jspm: {
      paths: {
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*"
      },
      config: 'src/browser/jspm.config.js',
      packages: "src/browser/jspm_packages/",
      loadFiles: [
        'src/browser/app/**/*.spec.ts'
        ],
      serveFiles: [
          'src/browser/app/**/!(*spec|*mock).ts',
          'src/browser/app/**/*.css',
        ]
    },
  });
};