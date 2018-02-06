var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var BUILD_DIR = path.resolve(__dirname, 'dist');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');


var config = {
  
  entry: {
    app: APP_DIR + '/Main.jsx' 
  }, 


  output: {
    publicPath: '/',
    filename: "[name].bundle.js"
  },


  externals: {
    config: JSON.stringify(require(path.join(__dirname, "config", "development.json")))
  },
 

  module : {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['raw-loader', 'sass-loader'],
        })
      }
    ]
  },

  resolve: {
      extensions: ['.jsx', '.js', '.es6']
  },
  
  //debug, es6 to es5 mapping
  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin ({
      VERSION: JSON.stringify("1.0.0"),
      PRODUCTION: JSON.stringify("false")
    }),

    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.bundle.js',
        minChunks:  function(module, count) {
            var context = module.context;
            return context && context.indexOf('node_modules') >= 0;
        },
    }),

    new HtmlWebpackPlugin({
      title: 'My Product App',
      filename: 'index.html', //output file name
      template: './src/index.html' //input file
    }),

    
    new ExtractTextPlugin('dist/styles/style.css', {
        allChunks: true
    })


    
  ],

  devServer: {
    contentBase: APP_DIR,
    compress: true,
    port: 8080,

    historyApiFallback: {
      index: '/'
    }
  }

};

module.exports = config;


