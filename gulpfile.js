const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();
const path = require('path');
const imagemin = require('gulp-imagemin');
const del = require('del');
const srcPath = './app';
const buildPath = 'tmp';
gulp.task('less', function () {
    return gulp.src("less/style.less", { cwd: srcPath })
        .pipe(less())
        .pipe(gulp.dest("css", { cwd: buildPath }))
});

gulp.task('html', function () {
    return gulp.src('*.html', { cwd: srcPath })
        .pipe(gulp.dest(buildPath));
});

gulp.task('fonts', function () {
    return gulp.src('fonts/*', { cwd: srcPath })
    .pipe(gulp.dest("fonts", { cwd: buildPath }))
});


gulp.task("images", function () {
    return gulp.src(['img/**/*.{png,jpg,gif,svg}'], {cwd: srcPath})
        .pipe(
            imagemin({
                progressive:  true,
                optimizationLevel: 3
            })
            )
        .pipe(gulp.dest(buildPath + '/img'));
});

gulp.task('js', function () {
    return gulp.src('js/*', { cwd: srcPath })
    .pipe(gulp.dest("js", { cwd: buildPath }))
})

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: buildPath
        },
        notify: false,
        ui: false
    });
    gulp.watch('**/*.js', { cwd: path.join(srcPath, 'js') }, gulp.series('js')).on('change', browserSync.reload);
    gulp.watch("**/*.less", { cwd: path.join(srcPath, 'less') }, gulp.series('less')).on('change', browserSync.reload);
    gulp.watch('*.html', { cwd: srcPath }, gulp.series('html')).on('change', browserSync.reload);

});

gulp.task("clean", function () {
    return del(buildPath);
});

gulp.task('build', gulp.series('clean', 'html', 'images', 'js', 'fonts', 'less', 'serve'));

