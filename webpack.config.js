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
      ArticleView :path.resolve(__dirname, 'app/containers/container-article-view.container.jsx/'),
      ArticleDetail :path.resolve(__dirname, 'app/containers/container-article-detail.container.jsx/'),
      CommentBox :path.resolve(__dirname, 'app/containers/container-comment-box.container.jsx/'),
      CommentForm :path.resolve(__dirname, 'app/containers/container-comment-form.container.jsx/'),
      SideArticleList : path.resolve(__dirname, 'app/containers/container-side-article-list.container.jsx/'),
      FullArticleBody : path.resolve(__dirname, 'app/containers/container-full-article-body.container.jsx/'),
      SideArticle :  path.resolve(__dirname, 'app/containers/container-side-article.container.jsx/'),

      //components
      DisplayMessage : path.resolve(__dirname, 'app/components/component-display-message.jsx/'),
      DisplayComments : path.resolve(__dirname, 'app/components/component-display-comments.jsx/'),
      DisplayComment : path.resolve(__dirname, 'app/components/component-display-comment.jsx/'),

      //actions
      LoginActions:path.resolve(__dirname, 'app/actions/login-actions.jsx/'),
      InvitationRequestActions:path.resolve(__dirname, 'app/actions/invitation-request-actions.jsx/'),
      CreateInvitationRequestActions:path.resolve(__dirname, 'app/actions/create-invitation-request-actions.jsx/'),
      Actions:path.resolve(__dirname, 'app/actions/index.jsx/'),
      TileActions:path.resolve(__dirname, 'app/actions/tile-actions.jsx/'),
      TreeActions: path.resolve(__dirname, 'app/actions/tree-actions.jsx/'),
      CreateArticleActions: path.resolve(__dirname, 'app/actions/create-article-actions.jsx/'),
      ArticleViewActions : path.resolve(__dirname, 'app/actions/article-view-actions.jsx/'),
      ArticlesActions : path.resolve(__dirname, 'app/actions/articles-actions.jsx/'),
      ArticleDetailActions : path.resolve(__dirname, 'app/actions/article-detail-actions.jsx/'),
      CommentBoxActions : path.resolve(__dirname, 'app/actions/comment-box-actions.jsx/'),
      SideArticleListActions : path.resolve(__dirname, 'app/actions/side-article-list-actions.jsx/'),
      CommentFormActions : path.resolve(__dirname, 'app/actions/comment-form-actions.jsx/'),
      DisplayCommentsActions : path.resolve(__dirname, 'app/actions/display-comments-actions.jsx/'),

      //reducers
      LoginReducer:path.resolve(__dirname, 'app/reducers/login-reducers.jsx/'),
      CreateInvitationRequestReducer:path.resolve(__dirname, 'app/reducers/create-invitation-request-reducers.jsx/'),
      CombinedReducer:path.resolve(__dirname, 'app/reducers/index.jsx/'),
      InvitationRequestReducer : path.resolve(__dirname, 'app/reducers/invitation-request-reducer.jsx/'),
      TileReducer:path.resolve(__dirname, 'app/reducers/tile-reducer.jsx/'),
      TreeReducer:path.resolve(__dirname, 'app/reducers/tree-reducer.jsx/'),
      CreateArticleReducer:path.resolve(__dirname, 'app/reducers/create-article-reducer.jsx/'),
      ArticleViewReducer :path.resolve(__dirname, 'app/reducers/article-view-reducer.jsx/'),
      ArticlesReducer :path.resolve(__dirname, 'app/reducers/articles-reducer.jsx/'),
      ArticleDetailReducer : path.resolve(__dirname, 'app/reducers/article-detail-reducer.jsx/'),
      CommentBoxReducer : path.resolve(__dirname, 'app/reducers/comment-box-reducer.jsx/'),
      SideArticleListReducer : path.resolve(__dirname, 'app/reducers/side-article-list-reducer.jsx/'),
      CommentFormReducer :  path.resolve(__dirname, 'app/reducers/comment-form-reducer.jsx/'),
      DisplayCommentsReducer :path.resolve(__dirname, 'app/reducers/display-comments-reducer.jsx/'),

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
            presets: ["react", "es2015","stage-2"],
            plugins: [
              "add-module-exports",
              "transform-object-rest-spread",
              "transform-es2015-destructuring",
              "transform-class-properties"

            ]

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
