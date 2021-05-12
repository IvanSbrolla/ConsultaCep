const {series} = require('gulp');
const gulp = require('gulp');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');
const {appCss, appHtml, appJs} = require('./app')
function servidor() {
    return gulp.src('../root')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true
        }))
}

function monitorarArquivos(cb) {
    watch('../build/html/*.html', () => series(appHtml)());
    watch('../build/JavaScript/*.js', () => series(appJs)());
    watch('../build/sass/*.scss', () => series(appCss)());
    return cb;
}

module.exports = {
    servidor,
    monitorarArquivos
}