var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');

var onError = function(err) {
	console.log('An error occurred:', gutil.colors.magenta(err.message));
	gutil.beep();
	this.emit('end');
};

gulp.task('scss', function(){
	return gulp.src('assets/scss/*.scss')
	.pipe(plumber({errorHandler: onError}))
	.pipe(sass())
	.pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
	gulp.watch('assets/scss/*.scss', ['scss']);
});

gulp.task('default', ['scss']);
