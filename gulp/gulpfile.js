const { series, parallel } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const concat = require('gulp-concat');
const uglifyCss = require('gulp-uglifycss');

const { depFontAwesomeCss, depFontAwesomeJs,depJquery,depJqueryMask } = require('./gulpTasks/deps');
const { appHtml, appJs, appCss } = require('./gulpTasks/app');
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor');



module.exports.default = series(
    parallel(
        series(depFontAwesomeCss,depFontAwesomeJs,depJqueryMask,depJquery),
        series(appHtml, appJs, appCss)
    ),
    servidor,
    monitorarArquivos
)