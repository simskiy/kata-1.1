const { series, parallel } = require("gulp")
const config = require('./gulp/config')
const compilePug = require('./gulp/tasks/compilePug')
const compileSass = require('./gulp/tasks/compileSass')
const clean = require('./gulp/tasks/clean')
const serve = require('./gulp/tasks/serve')

exports.build = series(
  clean,
  parallel(compilePug, compileSass)
)

exports.dev = series(
  parallel(compileSass, compilePug),
  serve
)
