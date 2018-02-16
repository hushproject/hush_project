const gulp = require('gulp'),
  htmlmin = require('gulp-html-minifier');

gulp.src('./public/**/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('./public'));
