'use strict'

import gulp from 'gulp';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import { argv } from 'yargs';
import sass from 'gulp-sass';


// Bundles CSS
gulp.task('styles', () => {

  let unCompressed = sass().on('error', sass.logError);
  let compressed = sass({ outputStyle: 'compressed'})
                       .on('error', sass.logError);

  return gulp.src('app/scss/app.scss')
    .pipe(argv.production ? compressed : unCompressed)
    .pipe(gulp.dest('./dist/css'))
})

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
  return gulp.src('app/js/app.js')
    .pipe(argv.production ? gulpWebpack(prod, webpack) : gulpWebpack(dev, webpack))
    .pipe(gulp.dest('./dist/js'))
})

// HTML
gulp.task('html', () => {
  return gulp.src('./app/index.html')
    .pipe(gulp.dest('./dist'));
})


// Watch changes in files
gulp.task('watch', () => {
  gulp.watch('app/js/**/*.js', ['scripts'])
  gulp.watch('app/scss/**/*.scss', ['styles'])
  gulp.watch('app/*.html', ['html'])
})

// Bundles everything
gulp.task('build', ['scripts', 'styles', 'html'])
