'use strict'

import gulp from 'gulp';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import { argv } from 'yargs';
import sass from 'gulp-sass';
import flatten from 'gulp-flatten';
import plumber from 'gulp-plumber';


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
  return gulp.src('app/scripts/app.js')
    .pipe(plumber())
    .pipe(argv.production ? gulpWebpack(prod, webpack) : gulpWebpack(dev, webpack))
    .pipe(gulp.dest('./dist/scripts'))
})

// HTML
gulp.task('html', () => {
  return gulp.src('./app/index.html')
    .pipe(gulp.dest('./dist'));
})

// Angular templates
gulp.task('templates', () => {
  return gulp.src('./app/scripts/**/*.html')
    .pipe(flatten()) // Removes parent directories
    .pipe(gulp.dest('./dist/templates'))
})


// Watch changes in files
gulp.task('watch', () => {
  gulp.watch('app/scripts/**/*.js', ['scripts'])
  gulp.watch('app/**/*.scss', ['styles'])
  gulp.watch('app/*.html', ['html'])
  gulp.watch('app/scripts/**/*.html', ['templates'])
})

// Bundles everything
gulp.task('build', ['scripts', 'styles', 'html', 'templates'])
