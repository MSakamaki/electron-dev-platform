/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="../../typings/node/node.d.ts" />

import env from '../env';
import Config from './build/config';

(() => {
  const gulp = require('gulp');
  const http = require('http');
  const url = require('url');
  const fs = require('fs');
  const archiver = require('archiver');
  const archive = archiver('zip');

  //http://www.iana.org/assignments/media-types/media-types.xhtml
  const contentTypes = {
    'html': 'text/html',
    'json': 'application/json; charset=utf-8',
    'text': 'text/plain',
    'xml': 'application/xml; charset=utf-8',
    'zip': 'application/zip',
    'nuget':'application/x-nupkg',
    'exe':'application/exe'
  };

  const createHeader = (type) => {
    return {
      'Access-Control-Allow-Origin': '*',
      'Pragma': 'no-cache',
      'Cache-Control': 'no-cache',
      'Content-Type': contentTypes[type],
    };
  }
  
  const verUp = (v: string): string => {
      let ary: Array<any> = v.split('.')
      let last: number = ary.length - 1;
      ary[last] = (parseInt(ary[last]) + 1).toString();
      return ary.join('.');
  };
  
  const getSimpleWrite = (context:string, write:string): Function => {
      return function(req, res){
        res.writeHead(200, createHeader(context));
        res.write(write);
        res.end();
      };
  };
  const getFileWrite = (context: string, filepath: string): Function => {
      return function(req, res){
        var raw = fs.createReadStream(filepath);
        raw.on('open', function() {
            res.writeHead(200, createHeader(context));
            raw.pipe(res);
        }).on('error', function(err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write(err + '\n');
            res.end();
        });
      };
  };
  
  const getZipArchive = (appFilePath: string): Function => {
      return function(req, res) {
      archive.on('error', function(err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write(err + '\n');
        res.end();
      });
      res.writeHead(200, createHeader('zip'));
      archive.pipe(res);
      archive.directory(appFilePath, 'exampleApp.app');
      archive.finalize();
    }
  };

  const dummyNupkg = `AB6F8EEAA8F1E62C811715D38787FAACA5C69144 electron_platform-${env.app.version}-full.nupkg 41625637
AB6F8EEAA8F1E62C811715D38787FAACA5C69144 electron_platform-${verUp(env.app.version)}-full.nupkg 41625637`;
 const dummyRequestUrlOsx =JSON.stringify({"url": "http://localhost:8080/archive/osx-x64.zip", });

  const api = {
    '/api/update/darwin': getSimpleWrite('json', dummyRequestUrlOsx),
    [`/api/update/win32/RELEASES`]: getSimpleWrite('text', dummyNupkg),
    [`/api/update/win32/electron_platform-${verUp(env.app.version)}-full.nupkg`]: getFileWrite('nuget',`.\\dist\\installer32\\electron_platform-${env.app.version}-full.nupkg`),
    [`/api/update/win32/Setup.exe`]: getFileWrite('exe','.\\dist\\installer32\\Setup.exe'),
    '/archive/osx-x64.zip': getZipArchive(`${process.cwd()}/${new Config('x64', 'darwin').packFullPath}`),
  }

  const listenServer = (req, res) => {

    var action = api[url.parse(req.url).pathname];
    console.log(url.parse(req.url).pathname)
    if (action) {
      action(req, res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write('404 Not Found\n');
      res.end();
    }
  }

  gulp.task('mock:server', () =>{
    let server = http.createServer(listenServer)
    server.listen(8080);
  });

})();
