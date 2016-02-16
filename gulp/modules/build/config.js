import env from '../../env';

const renamedBuilderPlatform = {
  darwin: 'osx',
  win32: 'win',
};

export default class ConfigGenerator {
  constructor(arch, platform) {
    this.arch = arch;
    this.platform = platform;
  }
  packager() {
    return {
      dir: env.dir.compile,
      out: env.dir.dest,
      name: env.electron.appName,
      arch: this.arch,
      platform: this.platform,
      version: env.electron.version,
    }
  }
  builder() {
    return {
      appPath: `${env.dir.dest}/${env.electron.buildName(this.platform, this.arch) }`,
      platform: renamedBuilderPlatform[this.platform],
      basePath: `${env.dir.root}`,
      out: env.dir.dist,
      config: env.electron.config,
    };
  }
}