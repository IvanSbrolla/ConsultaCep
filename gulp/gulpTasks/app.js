const { series } = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglifyCss = require('gulp-uglifycss');
const uglifyJs = require('gulp-uglify');
const sass = require('gulp-dart-sass');
const htmlMin = require('gulp-htmlmin');
const htmlmin = require('gulp-htmlmin');

function appHtml() {
    return gulp.src('../build/html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('../root'))
}
function appJs() {
    return gulp.src('../build/JavaScript/*.js')
        .pipe(uglifyJs({ "uglyComments": true }))
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('../root/JavaScript'))
}
function appCss() {
    return gulp.src('../build/sass/index.scss')
        .pipe(sass())
        .pipe(uglifyCss({ "uglyComments": true }))
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('../root/css'))
}

module.exports = {
    appHtml,
    appJs,
    appCss
}