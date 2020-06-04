const path = require('path');
require('dotenv/config');

const srcPath = path.resolve(__dirname, 'client');
const publicPath = path.resolve(__dirname, 'server/public/dist');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  entry: {
    index: './client/index.jsx',
    another: './client/context.js',
    another: './client/sass/main.scss',
    another: './client/app.jsx',
  },
  output: {
    path: publicPath,
    publicPath: publicPath,
    filename: '[name].bundle.js'
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
  }
  // devtool: 'source-map',
  // devServer: {
  //   host: 'localhost',
  //   port: 3000,
  //   contentBase: publicPath,
  //   historyApiFallback: true,
  //   watchContentBase: true,
  //   watchOptions: {
  //     ignored: /uploads/
  //   },
  //   stats: 'minimal',
  //   proxy: {
  //     '/api': 'localhost:' + port
  //   }
  // }
};