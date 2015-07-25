var gulp = require('gulp');
var browserify  = require('browserify')

gulp.task('js-canvas',function(){
	var b = browserify({
		entries: './public/canvas/main.js',
		debug:false
	});

	b.transform(reactify)


});

gulp.task('watch',function(){
	gulp.watch('./public/javascripts/*.js', ['js-main'])
});