const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  
 devServer: {
  overlay: {
      warnings: false,
      errors: false
  },
  lintOnSave: false
}
})
