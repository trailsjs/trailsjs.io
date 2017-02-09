'use strict'

const gulp = require('gulp')
const plumber = require('gulp-plumber')
const watch = require('gulp-watch')
const babel = require('gulp-babel')
const webpack = require('webpack-stream')
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin')

module.exports = {

  defaultTaskName: 'default',

  tasks: {
    default: ['compileTemplate', 'compileStyles', 'image', 'bundle'],

    compileTemplate () {
      return gulp.src('./assets/js/**/*.js')
        .pipe(babel({
          presets: ['react', 'es2015', 'stage-0']
        }))
        .pipe(gulp.dest('dist'))
    },
    compileStyles () {
      return gulp.src('./assets/styles/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'))
    },
    image: () => {
      return gulp.src('./assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
    },
    bundle (done) {
      gulp.src('assets/js/client.js')
        .pipe(watch([
          './assets/js/**/*.js',
          './assets/styles/**.*.scss'
        ]))
        .pipe(plumber())
        .pipe(webpack({
          output: {
            filename: 'client.js'
          },
          module: {
            loaders: [{
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ['react', 'es2015', 'stage-0']
              }
            },
            {
              test: /\.(css|scss)$/,
              loaders: ['style', 'css', 'sass']
            }]
          }
        }))
        .pipe(gulp.dest('dist'))
      done()
    }
  }
}
