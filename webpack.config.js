const path = require('path');
require('dotenv/config');

const srcPath = path.resolve(__dirname, 'client');
const publicPath = path.resolve(__dirname, 'server/public');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  entry: './client',
  output: {
    path: publicPath
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
          {
            loader: 'sass-loader',
          },
        ]
      },
      {
        test: /\.jsx?$/,
        include: srcPath,
        use:[
         
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/plugin-transform-react-jsx'
              ]
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    host: 'shanemcgrath.herokuapp.com',
    port: 5000,
    contentBase: publicPath,
    historyApiFallback: true,
    watchContentBase: true,
    watchOptions: {
      ignored: /uploads/
    },
    stats: 'minimal',
    proxy: {
      '/api': 'shanemcgrath.herokuapp.com'
    }
  }
};