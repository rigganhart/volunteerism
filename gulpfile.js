var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserify = require('gulp-browserify');

gulp.task('default',['html','css','js','watch'], function(){

});

gulp.task('html', function() {
    gulp.src('./templates/*.html').pipe(gulp.dest('./public/templates'));
    gulp.src('./templates/*/*.html').pipe(gulp.dest('./public/templates'));

    gulp.src(`./index.html`)
        .pipe(gulp.dest('./public'))
});

gulp.task('css',function () {
    gulp.src(`./scss/*.scss`)
      .pipe(sass())
      .pipe(gulp.dest('./public'))
});

gulp.task('js', function () {
    gulp.src('./js/app.js')
        .pipe(browserify())
        .pipe(gulp.dest('./public'));
});


gulp.task('watch', function(){
  gulp.watch('./scss/styles.scss', ['css'])
  gulp.watch('./index.html', ['html']);
  gulp.watch('./js/*.js', ['js']);
  gulp.watch('./js/*/*.js', ['js']);
  gulp.watch('./templates/*/*.html', ['html']);


})
