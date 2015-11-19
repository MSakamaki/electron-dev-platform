const gulp = require('gulp');
const gulpDep = require('gulp-description');
const description = {
    main:[
      'build',
      'debug',
      'default',
      'help',
    ],
    description:{
      babel:'babel compile',
      build:'electron relece build',
      'clean:build':'build directory clean',
      'copy:build':'copy build files',
      debug:'start development',
      default:'non tasks',
      'h:dep':'gulp tasks dependency',
      'h:ls':'show gulp all task',
      help:'view help',
      jscs:'jscs fix',
    },
  };

gulp.task('help', ()=>gulpDep.help(description));
gulp.task('h:ls', ()=>gulpDep.all(description));
gulp.task('h:dep', ()=>gulpDep.dependency(description));
