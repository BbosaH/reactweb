/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-11T09:04:02+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: webpack.config.js
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-18T00:17:21+03:00
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
      //containers
      IndexContainer: path.resolve(__dirname, 'app/containers/container-index.container.jsx/'),
      ViewArticles:path.resolve(__dirname, 'app/containers/container-view-articles.container.jsx/'),
      CreateArticle:path.resolve(__dirname, 'app/containers/container-create-article.container.jsx/'),
      TreeContainer:path.resolve(__dirname, 'app/containers/container-tree-container.container.jsx/'),
      ShareKnowlegeOptions:path.resolve(__dirname, 'app/containers/container-share-knowledge-options.container.jsx/'),
      LoginComponent: path.resolve(__dirname, 'app/containers/container-login.jsx/'),
      CreateInvitationRequestComponent:path.resolve(__dirname, 'app/containers/container-create-invitation-request.jsx/'),
      HomeContainer : path.resolve(__dirname, 'app/containers/container-home.container.jsx/'),
      InvitationRequestList : path.resolve(__dirname, 'app/containers/container-invitation-requests.container.jsx/'),
      InvitationRequestItem : path.resolve(__dirname, 'app/containers/container-invitation-request-item.container.jsx/'),
      TileContainer :path.resolve(__dirname, 'app/containers/container-tiledashboard.container.jsx/'),
      SearchBox :path.resolve(__dirname, 'app/containers/container-searchbox.container.jsx/'),

      //components
      DisplayMessage : path.resolve(__dirname, 'app/components/component-display-message.jsx/'),

      //actions
      LoginActions:path.resolve(__dirname, 'app/actions/login-actions.jsx/'),
      InvitationRequestActions:path.resolve(__dirname, 'app/actions/invitation-request-actions.jsx/'),
      CreateInvitationRequestActions:path.resolve(__dirname, 'app/actions/create-invitation-request-actions.jsx/'),
      Actions:path.resolve(__dirname, 'app/actions/index.jsx/'),
      TileActions:path.resolve(__dirname, 'app/actions/tile-actions.jsx/'),
      TreeActions: path.resolve(__dirname, 'app/actions/tree-actions.jsx/'),
      CreateArticleActions: path.resolve(__dirname, 'app/actions/create-article-actions.jsx/'),

      //reducers
      LoginReducer:path.resolve(__dirname, 'app/reducers/login-reducers.jsx/'),
      CreateInvitationRequestReducer:path.resolve(__dirname, 'app/reducers/create-invitation-request-reducers.jsx/'),
      CombinedReducer:path.resolve(__dirname, 'app/reducers/index.jsx/'),
      InvitationRequestReducer : path.resolve(__dirname, 'app/reducers/invitation-request-reducer.jsx/'),
      TileReducer:path.resolve(__dirname, 'app/reducers/tile-reducer.jsx/'),
      TreeReducer:path.resolve(__dirname, 'app/reducers/tree-reducer.jsx/'),
      CreateArticleReducer:path.resolve(__dirname, 'app/reducers/create-article-reducer.jsx/'),

      //others
      ConfigureStore :path.resolve(__dirname, 'app/store/store-config.jsx/'),
      Settings : path.resolve(__dirname, 'app/utility/settings.jsx/'),
      FirebaseIndex :path.resolve(__dirname, 'app/firebase/index.jsx/'),
      Utility : path.resolve(__dirname, 'app/utility/funcs.jsx/'),
      Email :path.resolve(__dirname, 'mail.jsx/'),




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
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }

}
