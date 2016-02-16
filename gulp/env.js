import APP_CONF from './config/electron.build';

const extension = {
  'darwin': 'app',
  'win32':'exe',
}

const env = {
  dir: {
    root: process.cwd(),
    src: 'src/browser',
    gulp: 'gulp',
    dest: 'dest',
    dist: 'dist',
    compile: 'dest/compile',
  },
  electron:{
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