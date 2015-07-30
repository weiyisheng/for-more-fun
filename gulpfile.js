var gulp = require('gulp');
var minCss = require('gulp-minify-css');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var reactify = require('reactify');

gulp.task('js-main', function () {
    var b = browserify({
        entries: './public/canvas/js/main.js',
        debug: false
    });

    b.transform(reactify);

    return b.bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./public/bundle'));
});

gulp.task('js-swiper', function () {
    var b = browserify({
        entries: './public/swiper/js/main.js',
        debug: false
    });

    b.transform(reactify);

    return b.bundle()
        .pipe(source('swiper.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./public/bundle'));
});

gulp.task('css-swiper', function () {
    return gulp.src('./node_modules/swiper/dist/css/swiper.css')
        .pipe(minCss())
        .pipe(gulp.dest('./public/bundle'));
});

gulp.task('js-blur', function () {
    var b = browserify({
        entries: './public/blur/js/main.js',
        debug: false
    });

    b.transform(reactify);

    return b.bundle()
        .pipe(source('blur.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./public/bundle'));
});

gulp.task('watch', function () {
    gulp.watch('./public/canvas/js/**/*.js', ['js-main']);
    gulp.watch('./public/swiper/js/**/*.js', ['js-swiper']);
    gulp.watch('./public/blur/js/**/*.js', ['js-blur'])

});