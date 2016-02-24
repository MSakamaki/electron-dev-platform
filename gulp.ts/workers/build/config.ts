/// <reference path="../../../typings/tsd.d.ts"/>

import env from '../../env';

const renamedBuilderPlatform = {
  darwin: 'osx',
  win32: 'win',
};

export default class ConfigGenerator {
  public arch : string;
  public platform : string;
  constructor(arch: string, platform: string) {
    this.arch = arch;
    this.platform = platform;
  }
  packager() {
    return {
      dir: env.dir.compile,
      out: env.dir.pack,
      name: env.electron.appName,
      arch: this.arch,
      platform: this.platform,
      version: env.electron.version,
    }
  }
  builder() {
    return {
      appPath: `${env.dir.pack}/${env.electron.buildName(this.platform, this.arch) }`,
      platform: renamedBuilderPlatform[this.platform],
      basePath: `${env.dir.root}`,
      out: env.dir.dist,
      config: env.electron.config,
    };
  }
}