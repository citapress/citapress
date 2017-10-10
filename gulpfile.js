var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var rev        = require('gulp-rev-append');

// TASKS FOR LIVE RELOADING ==========
gulp.task('css', function() {
  gulp.src(['*.css', 'styles/*.css']).pipe(livereload());
  gulp.src('./index.html')
    .pipe(rev())
    .pipe(gulp.dest('.'));
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

  gulp.watch(['*.html', 'views/*.html'], ['html']);
  gulp.watch(['*.css', 'styles/*.css'], ['css']);
  gulp.watch('js/*.js', ['js']);
});


gulp.task('default', ['watch']);