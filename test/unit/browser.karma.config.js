module.exports = function (config) {
  config.set({
    browsers: ['Electron'],
    basePath: '../../src/browser',
    frameworks: ['jspm', 'jasmine'],
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,

    preprocessors: {
      'app/**/*.ts': ['electronrequire'],
    },

    proxies: {
      '/app/': '/base/app/',
      '/jspm_packages/': '/base/jspm_packages/',
    },

    jspm: {
      paths: {
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*"
      },
      config: 'jspm.config.js',
      browser: 'jspm.browser.js',
      packages: "jspm_packages/",
      loadFiles: [
        'app/**/*.spec.ts',
      ],
      serveFiles: [
      //'src/browser/app/**/!(*spec|*mock).ts',
        'app/**/*.ts',
        'app/**/*.css',
      ]
    },
  });
};