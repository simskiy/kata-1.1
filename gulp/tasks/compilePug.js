const {src, dest} = require('gulp')
const plumber = require('gulp-plumber')
const config = require('../config')
const pug = require('gulp-pug')
const debug = require('gulp-debug')

module.exports = function compilePug() {
  return src(`${config.dir.index}`)
    .pipe(plumber())
    .pipe(debug({title: 'Compile pug'}))
    .pipe(pug())
    .pipe(dest(config.dir.build))
}
