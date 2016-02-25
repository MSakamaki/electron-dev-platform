/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="../../typings/node/node.d.ts" />

import env from '../env';
import Config from './build/config';

(() => {
  const gulp = require('gulp');
  const http = require('http');
  const url = require('url');
  const fs = require('fs');
  //const zlib = require('zlib');
  const archiver = require('archiver');
  const archive = archiver('zip');

  //http://www.iana.org/assignments/media-types/media-types.xhtml
  const contentTypes = {
    'html': 'text/html',
    'json': 'application/json; charset=utf-8',
    'xml': 'application/xml; charset=utf-8',
    'zip': 'application/zip',
  };

  const createHeader = (type) => {
    return {
      'Access-Control-Allow-Origin': '*',
      'Pragma': 'no-cache',
      'Cache-Control': 'no-cache',
      'Content-Type': contentTypes[type],
    };
  }

  const api = {
    '/api/update/darwin': (req, res) => {
      res.writeHead(200, createHeader('json'));
      res.write(JSON.stringify({
        "url": "http://localhost:8080/archive/osx-x64.zip",
      }));
      res.end();
    },
    '/archive/osx-x64.zip': (req, res) => {
      const configer = new Config('x64', 'darwin');
      const appfile = `${process.cwd()}/${configer.packFullPath}`;

      archive.on('error', function(err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write(err + '\n');
        res.end();
      });
      res.writeHead(200, createHeader('zip'));
      archive.pipe(res);
      archive.directory(appfile, 'exampleApp.app');
      archive.finalize();
    },
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
    //server.on('open', done)
  });

})();
