const path = require('path')
const HTMLplugin = require('html-webpack-plugin')
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: "web",
  // 入口
  entry: path.join(__dirname, 'src/index.js'),
  // 出口
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module:{
    rules: [
      {// 解析vue loader
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {// 解析css 将css插入js代码中
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.styl/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg|)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 给webpack编译过程中区分环境,也可以在js中使用
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HTMLplugin()
  ]
}

if (isDev) {
  // 用于调试
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    port: 8000,
    host: '127.0.0.1',
    overlay: {
      errors: true //显示错误
    },
    // 没有做映射的地址，映射到配置的地址
    // historyFallback: {
    //
    // },
    hot: true, //只更新组件 不更新整个页面
    open: true //自动打开浏览器
  }
  config.plugins.push(
     new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}

module.exports = config
