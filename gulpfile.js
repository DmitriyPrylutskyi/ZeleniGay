/**
 * Created by Dmitriy Prilutsky on 13.01.2017.
 */
var           gulp = require('gulp'),
             uncss = require('gulp-uncss'),
         minifyCss = require('gulp-clean-css'),
            uglify = require('gulp-uglify'),
            gulpif = require('gulp-if'),
            useref = require('gulp-useref'),
           htmlmin = require('gulp-htmlmin'),
  stripCssComments = require('gulp-strip-css-comments'),
 stripHtmlComments = require('gulp-strip-comments'),
             clean = require('gulp-clean');

gulp.task('clean', function () {
  gulp.src('css', {read: false}).pipe(clean());
  gulp.src('js', {read: false}).pipe(clean());
  gulp.src('dist', {read: false}).pipe(clean());
});

gulp.task('copy', ['clean'], function () {
  return gulp.src(['src/js/*.js'])
    .pipe(gulp.dest('js'));
});

gulp.task('stripcss', ['copy'], function () {
  return gulp.src('./src/css/*.css')
    .pipe(stripCssComments({preserve:false}))
    .pipe(gulp.dest('css'));
});

gulp.task('uncss', ['stripcss'], function () {
  return gulp.src('./css/style.css')
    .pipe(uncss({
      html: ['index.html']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('comb', ['uncss'], function () {
  return gulp.src('index.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['comb'], function() {
  return gulp.src('./dist/*.html')
    .pipe(stripHtmlComments({safe: true}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

