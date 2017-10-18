/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-17T19:45:53+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: create-article-reducer.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-17T20:09:25+03:00
 */
 import{
   ARTICLE_TEXT_CHANGED
 } from 'Settings'

 const defaultState ={
    text:''
 }

 export const createArticleReducer =(state=defaultState,action)=>{
   switch (action.type) {
     case ARTICLE_TEXT_CHANGED:
      return{
        ...state,
        ...defaultState,
        text:action.text

      }
     default:
      return state;

   }

 }
