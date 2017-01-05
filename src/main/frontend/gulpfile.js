var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	useref = require("gulp-useref"),
	rename = require('gulp-rename'),
	revAll = require('gulp-rev-all'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-clean-css'),
	lazypipe = require('lazypipe'),
	ngAnnotate = require('gulp-ng-annotate');

var PATH_WEBAPP = '../webapp/';
var PATH_TARGET = '../../../target/';
var PATH_PRE_DIST = PATH_TARGET + 'webapp-pre-dist/';
var PATH_DIST = PATH_TARGET + 'webapp-dist/'

var APP_VERSION = process.env.APP_VERSION;

gulp.task('copy-webapp', function () {
	return gulp.src(PATH_WEBAPP + '**')
        .pipe(gulp.dest(PATH_PRE_DIST));
});

gulp.task('index-join-assets', function () {
	return gulp.src(PATH_PRE_DIST + 'index.html')
		.pipe(useref())
        .pipe(gulp.dest(PATH_PRE_DIST));
});

var jsTask = lazypipe()
	.pipe(ngAnnotate)
	.pipe(uglify);

gulp.task('cache', function () {
	return gulp.src([PATH_PRE_DIST + '**', '!' + PATH_PRE_DIST + 'lib/**'])
		.pipe(revAll.revision({dontRenameFile: [/^\/index.html/g, '.xml', /^\/favicon.ico$/g]}))
		.pipe(gulpif('*.js', jsTask()))
        .pipe(gulpif('*.css', minifyCss()))
		.pipe(gulp.dest(PATH_DIST));
});

gulp.task('copy-lib', function () {
	return gulp.src(PATH_WEBAPP + 'lib/**')
		.pipe(gulp.dest(PATH_DIST + 'lib'));
});

gulp.task('default', function () {
	return runSequence('copy-webapp', 'index-join-assets', 'cache', 'copy-lib');
});