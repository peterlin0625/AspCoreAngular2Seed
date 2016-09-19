
var gulp = require('gulp'),
    rimraf = require('rimraf'),
    tsc = require('gulp-typescript');

var paths = {
    ts: {
        src: ['./scripts/app/*.ts'],
        dest: './wwwroot/app',
        config: './scripts/tsConfig.json'
    },
    npmAllFiles: ['node_modules/**/*/', '!node_modules/gulp*/**/*/'],
    lib: './wwwroot/node_modules/'
};
 
gulp.task('clean', function (cb) {
    return rimraf(paths.lib, cb);
});

gulp.task('copy:nodeModules', function () {
    return gulp.src(paths.npmAllFiles)
    .pipe(gulp.dest(paths.lib));
});

gulp.task('tsc', function () {
    var tsProject = tsc.createProject(paths.ts.config);
    var tsResult = gulp.src(paths.ts.src)
        .pipe(tsc(tsProject))
        .pipe(gulp.dest(paths.ts.dest));
});