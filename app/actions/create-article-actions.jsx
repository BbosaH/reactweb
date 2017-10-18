/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-17T19:47:55+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: create-article-actions.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-17T22:50:35+03:00
 */
 import firebase,{firebaseRef} from 'FirebaseIndex'

 import{
   SHOW_ARTICLES,
   CREATE_ARTICLE,
   ARTICLE_TEXT_CHANGED
 } from 'Settings'

 import {constructArrayFromFirebaseArray} from 'Utility'

 export const changeArticleTextAction =(text)=>{
   return{
     type : ARTICLE_TEXT_CHANGED,
     text,
   }
 }
 export const createOtherAction =()=>{
   return{
     type : CREATE_ARTICLE
   }
 }
