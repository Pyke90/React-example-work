'use strict';

// dependencies
const { series, watch, src, dest } = require('gulp');
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

// Compile SCSS
function compile_scss(){

    return src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed(SCSS_DEST))
    .pipe(dest(SCSS_DEST));
};

// Detect changes in SCSS
function watch_scss(){
    watch(SCSS_SRC, compile_scss);
};


exports.default = function() {
    watch(SCSS_SRC, compile_scss)
};