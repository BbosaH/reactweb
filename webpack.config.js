/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-11T09:04:02+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: webpack.config.js
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-11T11:10:43+03:00
 */



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

      Container: path.resolve(__dirname, 'app/components/container.jsx/'),
      //Templates: path.resolve(__dirname, 'src/templates/')

    },
    extensions : ['.js','.jsx']
  },
  module :{

    loaders: [
      {
        test: /\.jsx?$/,
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
