var path = require('path');
var webpack = require('webpack');

module.exports =
{
  entry :{

    app :'./app/app.jsx',

  },

  output :{
    path : __dirname,
    filename: './client/bundle.js'
  },
  resolve :{

    alias : {

      //Utilities: path.resolve(__dirname, 'src/utilities/'),
      //Templates: path.resolve(__dirname, 'src/templates/')

    },
    extensions : ['.js','.jsx']
  },
  module :{

    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        },
        exclude :/(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=node_modules/bootstrap/fonts/[name].[ext]'
      }
    ]
  }
}
