/// <reference path="../../../typings/tsd.d.ts"/>

import env from '../../env';

(()=>{

  const gutil = require('gulp-util');
  const gulp = require('gulp');
  const fs= require('fs');
  const exec = require('child_process').exec;
  const Readable = require('stream').Readable;
  const taskname: string = 'jspmBundle';

  const fileExists = (output: string, callback: Function) => {
    fs.access(output, fs.F_OK, (err, stat)=>{
      if (!!err && err.code === 'ENOENT') {
        gutil.log(taskname, `seatch '${output} file`);
        setTimeout(()=> fileExists(output, callback), 500);
      }else if (err){
        throw err;
      }else{
        gutil.log(taskname, `exists '${output} file`);
        callback();
      };
    });
  }

  const string_src = (filename, pkg): NodeJS.ReadableStream => {
    var src = new Readable({ objectMode: true })
    pkg.main = 'index.js';
    src._read = function () {
      this.push(new gutil.File({
          cwd: "",
          base: "",
          path: filename,
          contents: new Buffer(JSON.stringify(pkg))
      }));
      this.push(null);
    }
    return src;
  }

  gulp.task(taskname, done=>{
    let output: string = `${env.dir.compile}/browser/app.js`;
    exec(`jspm build app --minify ${output}`);
    fileExists(output, done);
  });

  gulp.task('writePackageJson', function () {
    var pkg = require(`${process.cwd()}/package.json`);
    return string_src("package.json", pkg)
      .pipe(gulp.dest(env.dir.compile))
  });
})();
