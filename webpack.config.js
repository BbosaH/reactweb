/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-11T09:04:02+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: webpack.config.js
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-14T13:20:06+03:00
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
      app : 'app',
      IndexContainer: path.resolve(__dirname, 'app/containers/container-index.container.jsx/'),
      LoginComponent: path.resolve(__dirname, 'app/containers/container-login.jsx/'),
      CreateInvitationRequestComponent:path.resolve(__dirname, 'app/containers/container-create-invitation-request.jsx/'),
      LoginActions:path.resolve(__dirname, 'app/actions/login-actions.jsx/'),
      CreateInvitationRequestActions:path.resolve(__dirname, 'app/actions/create-invitation-request-actions.jsx/'),
      Actions:path.resolve(__dirname, 'app/actions/index.jsx/'),
      LoginReducer:path.resolve(__dirname, 'app/reducers/login-reducers.jsx/'),
      CreateInvitationRequestReducer:path.resolve(__dirname, 'app/reducers/create-invitation-request-reducers.jsx/'),
      CombinedReducer:path.resolve(__dirname, 'app/reducers/index.jsx/'),
      ConfigureStore :path.resolve(__dirname, 'app/store/store-config.jsx/'),
      Settings : path.resolve(__dirname, 'app/settings/settings.jsx/'),
      FirebaseIndex :path.resolve(__dirname, 'app/firebase/index.jsx/'),
      DisplayMessage : path.resolve(__dirname, 'app/components/component-display-message.jsx/'),
      HomeContainer : path.resolve(__dirname, 'app/containers/container-home.container.jsx/'),

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
        loader: "url-loader?limit=1000000"
      },
      {
        test: /\.jpg$/,
        loader: "url-loader?limit=1000000"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=node_modules/bootstrap/fonts/[name].[ext]'
      }
    ]
  }
}
