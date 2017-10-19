/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-17T19:47:55+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: create-article-actions.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-17T22:50:35+03:00
 */
 import firebase,{firebaseRef} from 'FirebaseIndex'

 import{
   ARTICLE_SUBMITED,
   ARTICLE_TITLE_CHANGED,
   ARTICLE_TEXT_CHANGED,
   ARTICLE_IMAGE_CHANGED
 } from 'Settings'

 import {constructArrayFromFirebaseArray} from 'Utility'

 export const changeArticleTextAction =(text)=>{
   return{
     type : ARTICLE_TEXT_CHANGED,
     body_text:text,
   }
 }
 export const changeArticleTitleAction =(text)=>{
  return{
    type : ARTICLE_TITLE_CHANGED,
    title:text,
  }
}
export const changeArticleImageUrlAction =(text)=>{
  return{
    type : ARTICLE_IMAGE_CHANGED,
    image_url:text,
  }
}
export const submitArticleAction =(params)=>{
  return(dispatch)=>{
    dispatch({type : ARTICLE_SUBMITED,
    payload:params})
    const articleRef=firebaseRef.child('articles');
    articleRef.push(params);
  }
}
 export const createOtherAction =()=>{
   return{
     type : CREATE_ARTICLE
   }
 }
