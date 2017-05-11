'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
    files: ["views/**/*.*", 'scripts/**/*.*', 'public/**/*.*'],
    browser: "google chrome",
    port: 7000
	});
});

gulp.task('nodemon', function () {
	return nodemon({
		script: 'index.js',
    watch: ['index.js']
	}).on('start', function () {
    console.log('server started!');
	}).on('restart', function () {
    console.log('server restarted!')
  });
});

gulp.task('html', function() {
  gulp.src('views/*.html')
    .pipe();
});
 
gulp.task('watch', function() {
  gulp.watch('views/*.html', ['html']);
});


gulp.task('serve', ['browser-sync'], function () {
});