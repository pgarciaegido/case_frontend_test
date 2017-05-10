'use strict'

import gulp from 'gulp';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import { argv } from 'yargs';


// Bundles JS
gulp.task('scripts', () => {
  var dev = {
    module: {
      loaders: [{
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }]
    },
    output: {filename: 'app.js'}
  }

  // Same as dev but it minifies.
  var prod = {
    module: {
      loaders: [{
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }]
    },
    output: {filename: 'app.js'},
    node: {fs: "empty"},
    plugins: [new webpack.optimize.UglifyJsPlugin()]
  }
  // If it has --production flag, minify.
  return gulp.src('app/app.js')
    .pipe(argv.production ? gulpWebpack(prod, webpack) : gulpWebpack(dev, webpack))
    .pipe(gulp.dest('./dist'))
})


// Watch changes in files
gulp.task('watch', () => {
  gulp.watch('app/**/*.js', ['scripts'])
})
