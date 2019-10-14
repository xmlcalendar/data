const gulp = require('gulp');
const del = require('del');
const { xmltojson } = require('gulp-xmltojson');

gulp.task('clear', function() {
  return del('dist');
});

gulp.task('copy', function() {
  return gulp.src('./ru/**/*.xml', { src: './ru' }).pipe(gulp.dest('./dist'));
});

gulp.task(
  'xml-json',
  gulp.series('clear', 'copy', function() {
    return gulp
      .src('./ru/**/*.xml', { src: './ru' })
      .pipe(xmltojson({ compact: false, spaces: 2, ignoreAttributes: false }))
      .pipe(gulp.dest('./dist'));
  })
);
