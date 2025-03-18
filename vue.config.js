const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '/mock-tablet-view/',
  transpileDependencies: [
    'vuetify'
  ]
})
