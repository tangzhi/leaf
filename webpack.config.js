var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: __dirname + '/modules',
  entry: {
    main: './js/app.js',
    vendors: [
      'jquery', 'underscore', 'backbone', 'bootstrap'
    ]
  },
  output: {
    path: __dirname + '/web/assets',
    filename: 'js/[name].js',
    publicPath: '/assets/',
    chunkFilename: 'js/[hash].[id].js'
  },

  module: {
    preLoaders: [
      { test: /[\.-]min\.js$/, loader: 'source-map-loader' }
    ],
    loaders: [
      {
        test: /\.(hbs|handlebars)$/,
        loader: 'handlebars'
      },
      {
        test: /\.(png|jpg|gif)$/,
        // inline base64 URLs for <=10kb images, direct URLs for the rest
        loader: 'url?limit=10000&name=img/[name].[ext]'
      },
      {
        test: /\.(woff2?|eot|ttf|svg)(\?v=[\d\.]+)?$/,
        loader: 'url?limit=10000&name=fonts/[hash].[ext]'
      }
    ]
  },

  resolve: {
    modulesDirectories: [
      'modules', 'node_modules'
    ],
    alias: {
      jquery: 'jquery/dist/jquery.min',
      underscore: 'underscore/underscore-min',
      backbone: 'backbone/backbone-min',
      bootstrap: 'bootstrap/dist/js/bootstrap.min'
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),

    new CleanWebpackPlugin(['web/assets'], {
      root: __dirname,
      verbose: true
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })

    /*
    ,
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
    })
    */
  ]
};
