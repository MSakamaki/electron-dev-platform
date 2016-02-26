/// <reference path="../../typings/tsd.d.ts"/>

export interface JasmineConfInf {
  spec_dir: string,
  spec_files: Array<string>,
}

export interface ElectronConfInf {
  osx: {
    title: string,
    background: string,
    icon: string,
    'icon-size': number,
    contents: Array<any>,
  },
}

export interface RootPathInf {
  root: string,
  browser: string,
  assets: string,
  platform: string,
  gulp: string,
  dest: string,
  dist: string,
  compile: string,
  pack: string,
  unit: string,
};

export interface SourcePathsInf {
  platform: {
    src: Array<string>,
    test: Array<string>,
    asset:  Array<string>,
  },
  browser: {
    script:  Array<string>,
    html:  Array<string>,
  },
};

export interface electronDefaultConf {
  darwin: electronConfItemInf;
  win32: electronConfItemInf;
  linux: electronConfItemInf;
}

export interface electronConfItemInf {
  icon: string;
}