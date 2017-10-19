/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-17T19:45:53+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: create-article-reducer.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-17T20:09:25+03:00
 */
 import{
   ARTICLE_TEXT_CHANGED,
   ARTICLE_TITLE_CHANGED,
   ARTICLE_SUBMITED,
   ARTICLE_IMAGE_CHANGED

 } from 'Settings';
 import RichTextEditor from 'react-rte';

 const defaultState ={
   title:'',
   body_text:'',
   image_url:'',
   date_of_creation :'',
   user :{
     
   },
   comments:[

   ],
   likes :[
     
   ]
 }

 export const createArticleReducer =(state=defaultState,action)=>{
   switch (action.type) {
      case ARTICLE_TEXT_CHANGED:
        return{
          ...state,
          body_text:action.body_text

        }
      case ARTICLE_TITLE_CHANGED:
        return{
          ...state,
          title :action.title
          
        }
      case ARTICLE_SUBMITED:
        return{
          ...state,
          ...action.payload,
          title :'',
          body_text:'',
          image_url:'',

         
        }
        case ARTICLE_IMAGE_CHANGED:
        return{
          ...state,
          image_url:action.image_url
         
        } 
     default:
      return state;

   }

 }
