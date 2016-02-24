/// <reference path="../../typings/tsd.d.ts"/>

import {JasmineConfInf} from './_interfacees';

const JASMINE_CONF: JasmineConfInf = {
  spec_dir: 'dest/unit',
  spec_files: [
    'config/**/*.spec.js'
  ]
};

export default JASMINE_CONF;
