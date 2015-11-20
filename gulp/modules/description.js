const gulp = require('gulp');
const gulpDep = require('gulp-description');
const description = {
    main:[
      'build',
      'serve',
      'default',
      'help',
    ],
    description:{
      build:'electron relece build',
      default:'non tasks',
      serve: 'start development',
      'h:dep':'gulp tasks dependency',
      'h:ls':'show gulp all task',
      help:'view help',
      jscs:'jscs fix',
      watch: 'livereload task',
    },
  };

gulp.task('help', ()=>gulpDep.help(description));
gulp.task('h:ls', ()=>gulpDep.all(description));
gulp.task('h:dep', ()=>gulpDep.dependency(description));
