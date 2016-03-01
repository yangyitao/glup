<<<<<<< HEAD
/*var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');
gulp.task('minifycss', function() {
    return gulp.src('src/*.css')      //压缩的文件
        .pipe(gulp.dest('minified/css'))   //输出文件夹
        .pipe(minifycss());   //执行压缩
});

gulp.task('minifyjs', function() {
    return gulp.src('js/*.js')
        .pipe(concat('main.js'))    //合并所有js到main.js
        .pipe(gulp.dest('js'))    //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('1.js'));  //输出
});
gulp.task('clean', function(cb) {
    del(['minified/css', 'minified/js'], cb)
});
gulp.task('default', ['clean'], function() {
    gulp.start('minifycss', 'minifyjs');
});*/


var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('minify', function () {
   gulp.src('script/*.js')
       .pipe(uglify())
       .pipe(gulp.dest('./build'))
});
gulp.task('default', ['minify']);
//在node中直接运行glup
=======
//npm install gulp -g (global环境)
//npm install gulp --save-dev (项目环境)
//在项目中install需要的gulp插件，一般只压缩的话需要
//npm install gulp-minify-css gulp-concat gulp-uglify gulp-rename del --save-dev
//以下require需要的module
var gulp = require('gulp'),
	minifycss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	del = require('del');
//压缩JS
gulp.task('minify', function() {
	gulp.src('./src/js/*.js')
		.pipe(concat('main.js'))         //合并所有js到main.js
		.pipe(rename({suffix: '.min'}))  //rename压缩后的文件名 让main.js变成main.min.js
		.pipe(uglify())                  //执行压缩
		.pipe(gulp.dest('./build/js'))
});
//压缩CSS
gulp.task('minifycss', function() {
	return gulp.src('./src/css/*.css')  //压缩的文件
		.pipe(gulp.dest('./build/css')) //输出文件夹
		.pipe(minifycss());
});
//执行压缩前，先删除文件夹里的内容
//执行删除的时候不要把目录定在build的子目录中，windows删除目录的同时会报错
gulp.task('clean', function(cb) {
	del(['build/css', 'build/js'], cb)
});
//在任务数组中放上面要执行的任务
gulp.task('default', ['clean', 'minify', 'minifycss']);
>>>>>>> origin/master
