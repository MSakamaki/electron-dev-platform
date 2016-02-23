const gulp = require('gulp');
const grunt = require('grunt');

grunt.task.init = function () { };

// Gruntfile.jsっぽいこと
grunt.initConfig({
  'create-windows-installer': {
    // x64: {
    //   appDirectory: '/tmp/build/my-app-64',
    //   outputDirectory: '/tmp/build/installer64',
    //   authors: 'My App Inc.',
    //   exe: 'myapp.exe'
    // },
    ia32: {
      appDirectory: 'dest/pack/exampleApp-win32-ia32',
      outputDirectory: 'dest/pack/installer32',
      authors: 'My App Inc.',
      exe: 'exampleApp.exe'
    }
  }
});

grunt.loadNpmTasks('grunt-electron-installer');

gulp.task('make:win', done=> {
  grunt.tasks(['create-windows-installer'], {}, done);
});