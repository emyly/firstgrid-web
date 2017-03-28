const gulp = require('gulp');
const webpack = require('webpack');
const gutil = require("gulp-util");
const webpackConfig = require('./webpack.config.js');
const less = require('gulp-less');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');

const js_path = './src/js/**/*';
const css_path = './src/css/**/*';
const css_compile_source = './src/css/*.less';
const css_compile_destination = './public/css';

gulp.task("build-dev", ["webpack:build-dev","compileLess"], function() {
    gulp.watch([js_path], ["webpack:build-dev"]);
    gulp.watch([css_path], ["compileLess"]);

});

gulp.task("build", ["webpack:build","compileLess"]);

gulp.task("webpack:build", function(callback) {
    const myConfig = Object.create(webpackConfig);

    webpack(myConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();


    });
});

const myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;
const devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-dev", err);
        callback();
    });
});


gulp.task('compileLess', function () {
    gulp.src(css_compile_source)
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(gulp.dest(css_compile_destination));
});
