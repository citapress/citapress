var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var rev        = require('gulp-rev-append');

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

gulp.task('rev', function() {
  return gulp.src('./index.html')
    .pipe(rev())
    .pipe(gulp.dest('.'));
});

// WATCH TASK =========================
gulp.task('watch', function() {
  livereload.listen();

  gulp.watch(['*.html', 'views/*.html'], gulp.series('html'));
  gulp.watch(['*.css', 'styles/*.css'], gulp.series('css'));
  gulp.watch('js/*.js', gulp.series('js'));
});


gulp.task('default', gulp.series('watch'));