
'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const name = defaultSettings.title || 'vue Element Admin' // page title
const port = process.env.port || process.env.npm_config_port || 9527 // dev port
module.exports = {
  publicPath: './',
  outputDir: 'erp',
  assetsDir:'staticDir',
  lintOnSave: process.env.NODE_ENV === 'development',
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
}
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false
// })