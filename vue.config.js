const path = require('path');
const webpack = require('webpack');
const env = process.env.NODE_ENV;
const configEnv = process.env.CONFIG_ENV;

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    proxy: {
      '/demo': {
        target: 'http://yapi.iyunxiao.com/mock/451',
        changeOrigin: true
      }
    },
    disableHostCheck: true
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        feConfig: path.resolve('.', './src/feConfig/' + (configEnv || 'development')),
        Util: path.resolve('.', './src/utils/util'),
        Enums:path.resolve('.', './src/contants/enums')
      })
    ]
  }
};