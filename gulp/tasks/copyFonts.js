const {src, dest} = require('gulp')
const config = require('../config')

module.exports = function copyFonts () {
  return src(config.dir.fonts)
    .pipe(dest(`${config.dir.build}fonts/`))
}
