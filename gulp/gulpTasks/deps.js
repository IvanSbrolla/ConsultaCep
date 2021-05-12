const { series } = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglifyCss = require('gulp-uglifycss');
const uglifyJs = require('gulp-uglify');
const strip = require('gulp-strip-comments');
const sass = require('gulp-dart-sass')

function depFontAwesomeCss() {
    return gulp.src('../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss')
        .pipe(sass())
        .pipe(uglifyCss({ "uglyComments": true }))
        .pipe(concat('depsFontAwesome.min.css'))
        .pipe(gulp.dest('../root/css'))
}
function depFontAwesomeJs() {
    return gulp.src('../node_modules/@fortawesome/fontawesome-free/js/all.js')
        .pipe(uglifyJs())
        .pipe(strip())
        .pipe(concat('depsFontAwesome.min.js'))
        .pipe(gulp.dest('../root/JavaScript'))
}
function depJquery() {
    return gulp.src('../node_modules/jquery/dist/jquery.js')
        .pipe(uglifyJs())
        .pipe(strip())
        .pipe(concat('depsJquery.min.js'))
        .pipe(gulp.dest('../root/JavaScript'))
}
function depJqueryMask() {
    return gulp.src('../node_modules/jquery-mask-plugin/dist/jquery.mask.js')
        .pipe(uglifyJs())
        .pipe(strip())
        .pipe(concat('depsJqueryMask.min.js'))
        .pipe(gulp.dest('../root/JavaScript'))
}

module.exports = {
    depFontAwesomeCss,
    depFontAwesomeJs,
    depJquery,
    depJqueryMask
}