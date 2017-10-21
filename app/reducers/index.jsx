/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-12T22:58:06+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: index.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-17T22:37:40+03:00
 */
 import {combineReducers} from 'redux';
 import {loginReducer} from "LoginReducer"
 import {createInvitationRequestReducer} from "CreateInvitationRequestReducer";
 import {invitationRequestReducer} from "InvitationRequestReducer";
 import {tileReducer} from "TileReducer"
 import {treeReducer} from "TreeReducer"
 import {createArticleReducer} from "CreateArticleReducer"
 import {articlesReducer} from "ArticlesReducer"
 import {articleViewReducer} from "ArticleViewReducer"
 import {commentBoxReducer} from 'CommentBoxReducer';
 import {sideArticleListReducer} from 'SideArticleListReducer';
 import {commentFormReducer} from 'CommentFormReducer';
 import {displayCommentsReducer} from 'DisplayCommentsReducer';
 
 


 const combinedreducer = combineReducers({

   login :loginReducer,
   createInvitationRequest:createInvitationRequestReducer,
   invitationRequest:invitationRequestReducer,
   tiles : tileReducer,
   treeReducer : treeReducer,
   createArticleReducer:createArticleReducer,
   articlesReducer:articlesReducer,
   articleViewReducer:articleViewReducer,
   commentBoxReducer:commentBoxReducer,
   sideArticleListReducer:sideArticleListReducer,
   commentFormReducer:commentFormReducer,
   displayCommentsReducer:displayCommentsReducer
  

 });

 export default combinedreducer;
