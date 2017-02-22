'use strict'

const gulp = require('gulp')
//const plumber = require('gulp-plumber')
//const watch = require('gulp-watch')
const babel = require('gulp-babel')
const webpack = require('webpack-stream')
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin')

module.exports = {

  defaultTaskName: 'default',

  tasks: {
    default: ['compileTemplate', 'compileStyles', 'image'],

    compileTemplate () {
      return gulp.src('./assets/js/**/*.js')
        .pipe(babel({
          presets: ['react', 'es2015', 'stage-0']
        }))
        .pipe(gulp.dest('dist'))
    },
    compileStyles () {
      return gulp.src('./assets/styles/style.scss')
        .pipe(sass({
          includePaths: [ './node_modules' ]
        }).on('error', sass.logError))
        .pipe(gulp.dest('dist'))
    },
    image: () => {
      return gulp.src('./assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
    },
    bundle () {
      gulp.src('assets/js/html.js')
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
              loaders: ['style-loader', 'css-loader', 'sass-loader']
            }]
          }
        }))
        .pipe(gulp.dest('dist'))
    }
  }
}
