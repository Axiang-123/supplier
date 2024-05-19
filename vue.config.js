
'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const name = defaultSettings.title || 'Vue3'
const port = process.env.port || process.env.npm_config_port || 9527 // dev port
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/style/variable.scss";`
      }
    }
  },
}



// 把这段代码解开就会把上段代码覆盖
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false
// })