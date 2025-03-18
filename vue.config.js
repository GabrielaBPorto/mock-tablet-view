const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '/tablet-view/',
  transpileDependencies: [
    'vuetify'
  ]
})
