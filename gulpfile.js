const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');

// Compression of the HTML file
gulp.task('minify-html', () => {
  return gulp
    .src('app/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(gulp.dest('public/'));
});

// From SASS to CSS
gulp.task('sassToCss', async () => {
  return gulp
    .src('app/sass/*.sass')
    .pipe(sass())
    .pipe(
      autoprefixer({
        ovverideBrawserlist: ['last 20 verrsions'],
        cascade: false,
      })
    )
    .pipe(cleanCss())
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(gulp.dest('public/css/'));
});

// Compression of the JavaScript file
gulp.task('minify-js', async () => {
  return gulp
    .src('app/js/*.js')
    .pipe(uglify())
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(gulp.dest('public/js/'));
});

// Tracking changes
gulp.task('watch-files', async () => {
  gulp.watch('app/js/*.js', gulp.series('minify-js'));
  gulp.watch('app/sass/*.sass', gulp.series('sassToCss'));
  gulp.watch('app/*.html', gulp.series('minify-html'));
});

// Launch of all functions
gulp.task('default', gulp.series('watch-files'));
