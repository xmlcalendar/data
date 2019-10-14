var gulp = require('gulp');
var prettyData = require('gulp-pretty-data');

gulp.task('minify', function() {
  gulp
    .src('src/**.{xml,json,xlf,svg}')
    .pipe(
      prettyData({
        type: 'minify',
        preserveComments: true,
        extensions: {
          xlf: 'xml',
          svg: 'xml',
        },
      })
    )
    .pipe(gulp.dest('dist'));
});

gulp.task('prettify', function() {
  return gulp
    .src('ru/**/*.{xml,json}')
    .pipe(prettyData({ type: 'prettify' }))
    .pipe(gulp.dest('dist'));
});
