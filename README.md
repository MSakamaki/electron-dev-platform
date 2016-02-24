### electron my develop platfrom template

[![Build Status](https://travis-ci.org/MSakamaki/electron-dev-platform.svg?branch=master)](https://travis-ci.org/MSakamaki/electron-dev-platform)

### task

#### install

```sh
# global module
npm -g install gulp jspm tsd karma

# install
npm install

# use command help
gulp help
```

#### develop

```sh
gulp serve
```

#### build

```sh
# compile
gulp build:compile


# platform build 
# - osx
gulp build:osx

# - windows 64bit
gulp build:win

# - windows 32bit
gulp build:win32

```

### Required for Windows environment build (windows os Recommended)

 - c++ 2010 再頒布可能パッケージ
 + [NSIS: Nullsoft Scriptable Install System](https://sourceforge.net/projects/nsis/)

#### Non-windows platforms

 + python version 1.x or 2.x
 + C compiler (gcc and g++ packages)
 + [scons](http://www.scons.org/)
   + `python setup.py install`

## I want to use

### document

[documentation-translations](https://github.com/atom/electron#documentation-translations)

### mozule management

 + [Useful resources for creating apps with Electron](https://github.com/sindresorhus/awesome-electron)

#### JSPM

http://jspm.io

### animation

http://codepen.io/sol0mka/full/OyzBXR

### Playing Though not related

https://github.com/MicrosoftDX/Vorlonjs


