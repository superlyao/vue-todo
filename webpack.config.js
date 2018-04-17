const path = require('path')

module.exports = {
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
        test: /.vue$/, 
        loader: 'vue-loader'
      },
      {// 解析css 将css插入js代码中
        test: /.css$/,
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
  }
}