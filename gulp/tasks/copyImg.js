const {src, dest} = require('gulp')
const config = require('../config')

module.exports = function copyImg () {
  return src(config.dir.img)
    .pipe(dest(`${config.dir.build}img/`))
}
