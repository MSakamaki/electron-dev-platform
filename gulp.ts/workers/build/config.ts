/// <reference path="../../../typings/tsd.d.ts"/>

import env from '../../env';
import {ElectronConfInf} from '../../config/_interfacees';


const renamedBuilderPlatform = {
  darwin: 'osx',
  win32: 'win',
  win: 'win',
  linux: 'linux',
};

export default class ConfigGenerator {
  public arch : string;
  public platform : string;
  constructor(arch: string, platform: string) {
    this.arch = arch;
    this.platform = platform;
  }

  packager(): packagerFmt {
    return {
      dir: env.dir.compile,
      out: env.dir.pack,
      name: env.electron.appName,
      arch: this.arch,
      platform: this.platform,
      version: env.electron.version,
      sign: 'Developer ID Application: Nulab Inc. (XXXXXXXXXX)',
      sign_with_params: '/a /f .\\certs\\YOUR_CERT.pfx /p CERT_PASSWORD',
    }
  }
  builder(): builderFmt {
    return {
      appPath: `${env.dir.pack}/${env.electron.buildName(this.platform, this.arch) }`,
      platform: renamedBuilderPlatform[this.platform],
      basePath: `${env.dir.root}`,
      out: env.dir.dist,
      config: env.electron.config,
    };
  }
  get packFullPath(): string {
      let ElectronPlatformPath = {
        osx:`${env.dir.pack}/${env.electron.appName}-${this.platform}-${this.arch}/${env.electron.appName}.app`,
        win: `${env.dir.pack}/${env.electron.appName}-${this.platform}-${this.arch}/${env.electron.appName}.exe`,
      };
    return ElectronPlatformPath[renamedBuilderPlatform[this.platform]];
  }
}

interface packagerFmt {
      dir: string;
      out: string;
      name: string;
      arch: string;
      platform: string;
      version: string;
      sign: string;
      sign_with_params: string;
}

interface builderFmt {
      appPath: string;
      platform: string;
      basePath: string;
      out: string;
      config: ElectronConfInf;
}