const gulp           = require('gulp');
const livereload     = require('gulp-livereload');
const rev            = require('gulp-rev-append');
const staticI18nHtml = require('gulp-static-i18n-html');
const del            = require('del');
const filter = require('gulp-filter');

// WATCH TASK =========================
gulp.task('watch', function() {
  livereload.listen();

  gulp.watch(['locales/*.yaml'], gulp.series('localbuild'));
  gulp.watch(['*.html', 'pages/*.html'], gulp.series('localbuild'));
  gulp.watch(['*.css'], gulp.series('copyStaticFiles'));
  gulp.watch('js/*.js', gulp.series('localbuild'));
});

// BUILD TASKS =========================
gulp.task('rev', function() {
  return gulp.src('**/*.html')
    .pipe(rev())
    .pipe(gulp.dest('.'));
});

gulp.task('clean', function(){
  return del('dist/**', {force: true});
});

gulp.task('copyStaticFiles', function () {
  return gulp.src([
    '**/*',
    '!node_modules/**/*',
    '!**/locales/*',
    '!docs/*',
    '!dist/*',
    '!**/*.md',
    '!**/*.html',
    '!*',
    'style.css',
    '_redirects'
  ])
    .pipe(gulp.dest('./dist'))
    .pipe(filter('dist/style.css'))
    .pipe(livereload());
});

gulp.task('i18n', function() {
  return gulp.src(['**/*.html'])
    .pipe(staticI18nHtml({
      locale: 'en',
      locales: ['en', 'es'],
      fileFormat: 'yaml',
      allowHtml: true
    }))
    .pipe(filter(['**', '!**/node_modules/**/*']))
    .pipe(gulp.dest('./dist'))
    .pipe(livereload());
});

// Local build skips rev since this causes a watch loop with livereload
gulp.task('localbuild', gulp.series(['clean', 'copyStaticFiles', 'i18n']));
gulp.task('build', gulp.series(['clean', 'copyStaticFiles', 'i18n', 'rev']));