const {src, dest} = require('gulp')
const config = require('../config')
const scss = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber')
const debug = require('gulp-debug')

module.exports = function compileSass () {
  return src(`${config.dir.scss}`)
    .pipe(plumber())
    .pipe(debug({title: 'compile SCSS'}))
    .pipe(scss())
    .pipe(dest(`${config.dir.build}`))
}
