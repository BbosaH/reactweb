/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-11T09:04:02+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: webpack.config.js
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-13T01:40:05+03:00
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

      HomeContainer: path.resolve(__dirname, 'app/components/component-homecontainer.container.jsx/'),
      LoginComponent: path.resolve(__dirname, 'app/components/component-login.jsx/'),
      CreateAccountComponent:path.resolve(__dirname, 'app/components/component-createaccount.jsx/'),
      LoginActions:path.resolve(__dirname, 'app/actions/login-actions.jsx/'),
      LoginReducers:path.resolve(__dirname, 'app/reducers/login-reducers.jsx/'),
      ConfigureStore :path.resolve(__dirname, 'app/store/store-config.jsx/')

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
