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
  ARTICLE_UPDATED,
  ARTICLE_CLICKED,
  ARTICLE_COMMENTS_UPDATED
 } from 'Settings';

import {constructArrayFromFirebaseArray} from 'Utility'
 const defaultState ={
   id:'',
   title:'',
   body_text:'',
   image_url:'',
   date_of_creation :'',
   redirect_to_detail:false,
   user :{
     
   },
   topic :{

   },
   comments:[

   ],
   likes :[
     
   ]
 }

 export const articleViewReducer =(state=defaultState,action)=>{
   switch (action.type) {
      case ARTICLE_UPDATED:
        return{

          ...state,
          ...action.payload

        }
      case  ARTICLE_CLICKED:
       
        return {
          
          ...state,
          ...defaultState,
          id:action.payload.id,
          title:action.payload.title,
          body_text:action.payload.body_text,
          topic:action.payload.topic,
          user:action.payload.user,
          image_url :action.payload.image_url,
          date_of_creation:action.payload.date_of_creation,
          comments :(action.payload.comments)
          ? constructArrayFromFirebaseArray(action.payload.comments):[],
          likes :(action.payload.likes)?action.payload.likes:[], 
          redirect_to_detail:true
        }
      case ARTICLE_COMMENTS_UPDATED:
            return{
                ...state,
                comments :(action.payload)
          ? constructArrayFromFirebaseArray(action.payload):[],
      }
     
      default:
        return state;

   }

 }
