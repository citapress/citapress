const gulp           = require('gulp');
const livereload     = require('gulp-livereload');
const rev            = require('gulp-rev-append');
const staticI18nHtml = require('gulp-static-i18n-html');
const del            = require('del');

// TASKS FOR LIVE RELOADING ==========
gulp.task('css', function() {
  gulp.src(['*.css', 'styles/*.css']).pipe(livereload());
});

gulp.task('js', function() {
  gulp.src('js/*.js').pipe(livereload());
});

gulp.task('html', function() {
  gulp.src(['*.html', 'views/*.html']).pipe(livereload())
});

// WATCH TASK =========================
gulp.task('watch', function() {
  livereload.listen();

  gulp.watch(['*.html', 'views/*.html'], gulp.series('html'));
  gulp.watch(['*.css', 'styles/*.css'], gulp.series('css'));
  gulp.watch('js/*.js', gulp.series('js'));
});

// BUILD TASKS =========================
gulp.task('rev', function() {
  return gulp.src('**/*.html')
    .pipe(rev())
    .pipe(gulp.dest('.'));
});

gulp.task('clean', function(){
  return del('dist/**', {force:true});
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
    'style.css'
  ]).pipe(gulp.dest('./dist'));
});

gulp.task('i18n', function() {
  return gulp.src(['**/*.html'])
    .pipe(staticI18nHtml({
      locale: 'en',
      locales: ['en', 'es'],
      fileFormat: 'yaml',
      allowHtml: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', gulp.series(['clean', 'copyStaticFiles', 'i18n', 'rev']));
