### electron my develop platfrom template

|[![Build Status](https://travis-ci.org/MSakamaki/electron-dev-platform.svg?branch=master)](https://travis-ci.org/MSakamaki/electron-dev-platform)|[![Dependency Status](https://gemnasium.com/MSakamaki/electron-dev-platform.svg)](https://gemnasium.com/MSakamaki/electron-dev-platform)|
|:-:|:-:|

### task

#### install

```sh
# global module
npm -g install gulp jspm tsd karma electron-prebuilt

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


### (windows) create my code signing

```sh
# preparation
mkdir -p demoCA/newcerts demoCA/private
touch touch demoCA/index.txt
echo 01 > demoCA/serial

# LOCAL
openssl genrsa -des3 -out seq.key 2048
sudo chmod 600 seq.key
openssl req -new -sha256 -days 10000 -key seq.key -out my.app

# CA
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ca.key -out ca.crt
openssl ca -in my.app -cert ca.crt -keyfile ca.key -out my.crt

# LOCAL (convert  windows)
openssl pkcs12 -export -in my.crt -inkey seq.key -out my.pfx

# run windows (write gulp.ts/workers/build/config.ts sign_with_params)
/a /f my.pfx /p [seq.key password]
```

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

 + [JSPM](http://jspm.io)
