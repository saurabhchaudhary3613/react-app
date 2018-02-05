var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var BUILD_DIR = path.resolve(__dirname, 'dist');

var CopyWebpackPlugin = require('copy-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {
  entry: {
    app: APP_DIR + '/Main.jsx' 
  }, 
   
  output: {
    path: BUILD_DIR,
    filename: 'bundle.[chunkhash].js',
    publicPath: '/'
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
      }
    ]
  },

  resolve: {
      extensions: ['.jsx', '.js', '.es6']
  },
  
  //debug, es6 to es5 mapping
  devtool: 'source-map',

  externals: {
    config: JSON.stringify(require(path.join(__dirname, "config", "production.json")))
  },
 
  plugins: [
    new webpack.DefinePlugin ({
      VERSION: JSON.stringify("1.0.0"),
      PRODUCTION: JSON.stringify("false")
    }),

     new CopyWebpackPlugin([
      {
        from: "src/assets",
        to: "assets"
      },

      // {
      //   from: "index.html",
      //   to: "index.html"
      // }
    ]),
    
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.bundle.[chunkhash].js',
        minChunks:  function(module, count) {
            var context = module.context;
            return context && context.indexOf('node_modules') >= 0;
        },
    }),



     new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
          warnings: false,
        },

        sourceMap: true
      }),


      new HtmlWebpackPlugin({
        title: 'My Product App',
        filename: 'index.html', //output file name
        template: './src/index.html' //input file
      })


    
  ]

};

module.exports = config;


