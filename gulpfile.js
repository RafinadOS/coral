var   gulp = require('gulp'),
      concatCss = require('gulp-concat-css'),
      livereload = require('gulp-livereload'),
      connect = require('gulp-connect'),
      path = require('path'),
      less = require('gulp-less');

// for livereload pipe
gulp.task('connect', function() {
   connect.server({
      root: 'app',
      livereload: true
   });
});

// concat css
gulp.task('concat-css', function () {
   return gulp.src('css/*.css')
   .pipe(concatCss("style.css"))
   .pipe(gulp.dest('app/css'))
   .pipe(connect.reload());
});

// move html files to app folder
gulp.task('html', function() {
   gulp.src('*.html')
   .pipe(gulp.dest('app'))
   .pipe(connect.reload());
});

// less compilation
gulp.task('less', function () {
   return gulp.src('less/style.less')
   .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
   }))
   .pipe(gulp.dest('css/'))
   .pipe(connect.reload());
});

// move images for styles
gulp.task('img', function() {
   return gulp.src(['img/*.jpg','img/*.png','img/*.svg','img/*.gif'])
   .pipe(gulp.dest('app/img/'))
   .pipe(connect.reload());
});

// move images for conten
gulp.task('img2', function() {
   return gulp.src(['images/*.jpg','images/*.png','images/*.svg','images/*.gif'])
   .pipe(gulp.dest('app/images/'))
   .pipe(connect.reload());
});

// move favicons
gulp.task('favicon', function() {
   return gulp.src([	'img/favicon/*.jpg','img/favicon/*.xml','img/favicon/*.png','img/favicon/*.ico','img/favicon/*.json',])
   .pipe(gulp.dest('app/img/favicon/'))
   .pipe(connect.reload())
});

// concat .js files
gulp.task('js', function() {
   return gulp.src('js/*.js')
   .pipe(gulp.dest('app/js/'))
   .pipe(connect.reload());
});

// move fonts
gulp.task('fonts', function() {
   return gulp.src([	'fonts/*.ttf','fonts/*.woff','fonts/*.woff2','fonts/*.svg','fonts/*.eot'])
   .pipe(gulp.dest('app/fonts/'))
   .pipe(connect.reload())
});

// watcher
gulp.task('watch', function() {
   gulp.watch('css/*.css', ['concat-css'])
   gulp.watch('*.html', ['html'])
   gulp.watch('img/*.jpg', ['img'])
   gulp.watch('img/*.png', ['img'])
   gulp.watch('img/*.gif', ['img'])
   gulp.watch('img/favicon/*.jpg', ['favicon'])
   gulp.watch('img/favicon/*.xml', ['favicon'])
   gulp.watch('img/favicon/*.png', ['favicon'])
   gulp.watch('img/favicon/*.ico', ['favicon'])
   gulp.watch('img/favicon/*.json', ['favicon'])
   gulp.watch('images/*.jpg', ['img2'])
   gulp.watch('images/*.png', ['img2'])
   gulp.watch('images/*.gif', ['img2'])

   gulp.watch('fonts/*', ['fonts'])/*
   gulp.watch('fonts/*.woff', ['fonts'])
   gulp.watch('fonts/*.woff2', ['fonts'])
   gulp.watch('fonts/*.svg', ['fonts'])*/
   gulp.watch('fonts/*.eot', ['fonts'])
   gulp.watch('less/*.less', ['less'])
   gulp.watch('js/*.js', ['js'])
});

// default tusk "gulp"
gulp.task('default', ['connect', 'less', 'concat-css', 'html', 'js', 'img', 'fonts', 'img2', 'favicon', 'watch']);