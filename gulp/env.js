import APP_CONF from './config/electron.build';

const extension = {
  'darwin': 'app',
  'win32': 'exe',
}

const path = {
  root: process.cwd(),
  browser: 'src/browser',
  platform: 'src/platform',
  gulp: 'gulp',
  dest: 'dest',
  dist: 'dist',
  compile: 'dest/compile',
};

const src = {
  platform:{
    src:[`${path.platform}/**/!(*spec).ts`],
    test:[`${path.platform}/**/?(*spec).ts`],
  },
  browser:{
    script:[`${path.browser}/**/!(*spec).ts`],
    html:[
      `${path.browser}/**/*.html`,
      `!${path.browser}/jspm_packages/**/*.html`,
    ],
  },
};

const env = {
  dir: path,
  src: src,
  electron: {
    appName: 'exampleApp',
    version: '0.36.7',
    buildName: (platform, arch) => `${env.electron.appName}-${platform}-${arch}/${env.electron.appName}.${extension[platform]}`,
    config: APP_CONF,
  },
  file: {
    concat: 'index.js',
  },
};
export default env;