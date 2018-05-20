var gulp = require("gulp");
var browserSync  = require("browser-sync").create();
var htmlInjector = require("bs-html-injector");

const task = process.argv[3] || 1;
const tasks = ['debug', 'list', 'grid', 'table', 'form', 'profile', 'final', 'mitalent'];

const currentTask = tasks[task];

gulp.task("browser-sync", function () {
    browserSync.use(htmlInjector, {
        files: "*.html"
    });
    browserSync.init({
        server: currentTask
    });
});

gulp.task("default", ["browser-sync"], function () {
    gulp.watch(currentTask + "/**/*", htmlInjector);
});
