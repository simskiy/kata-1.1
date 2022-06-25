const config = require('../config')
const compileSass = require('./compileSass')
const compilePug = require('./compilePug')
const reload = require('../reload')
const browserSync = require('browser-sync')
const copyImg = require('./copyImg')
const {watch, series} = require('gulp')

module.exports = function serve() {
  browserSync.init({
    server: config.dir.build,
    port: 8080,
    startPath: 'index.html',
    open: false,
    notify: false,
  })

  watch([`${config.dir.scss}`], { events: ['all'], delay: 100 }, series(
    compileSass,
    reload
  ))

  watch(`${config.dir.pug}`, {events: ['all'], delay: 100}, series(
    compilePug,
    reload
  ))

  watch(`${config.dir.img}`, {events: ['all'], delay: 100}, series(
    copyImg,
    reload
  ))
}
