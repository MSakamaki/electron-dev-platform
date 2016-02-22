import path from './rootPaths';

const SOURCE = {
  platform: {
    src: [
      `${path.platform}/**/!(*spec).ts`
      ],
    test: [
      '!src/platform/index.ts',
      'src/platform/**/*.ts'
    ],
    asset: [`${path.assets}/common/**/*`]
  },
  browser: {
    script: [`${path.browser}/**/!(*spec).ts`],
    html: [
      `${path.browser}/**/*.html`,
      `!${path.browser}/jspm_packages/**/*.html`,
    ],
  },
};

export default SOURCE;
