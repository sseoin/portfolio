var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src(['scss/custom.scss'])
    .pipe(sass())
    .pipe(gulp.dest("css"));
});

gulp.task('default', ['sass']);