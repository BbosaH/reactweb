/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-17T17:56:34+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: tree-actions.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-17T19:00:49+03:00
 */
 import firebase,{firebaseRef} from 'FirebaseIndex'

 import{
   SHOW_ARTICLES,
   CREATE_ARTICLE
 } from 'Settings'

 import {constructArrayFromFirebaseArray} from 'Utility'

 export const showArticlesAction =()=>{
   return{
     type : SHOW_ARTICLES
   }
 }
 export const createArticleAction =()=>{
   return{
     type : CREATE_ARTICLE
   }
 }
