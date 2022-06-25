const config = require('../config')
const compileSass = require('./compileSass')
const compilePug = require('./compilePug')
const reload = require('../reload')
const browserSync = require('browser-sync')
const {watch, series} = require('gulp')

module.exports = function serve() {
  browserSync.init({
    server: config.dir.build,
    port: 8080,
    startPath: 'index.html',
    open: false,
    notify: false,
  });

  watch([`${config.dir.scss}`], { events: ['all'], delay: 100 }, series(
    compileSass,
    reload
  ));

  watch(`${config.dir.pug}`, {devents: ['all'], delay: 100}, series(
    compilePug,
    reload
  ));
}
