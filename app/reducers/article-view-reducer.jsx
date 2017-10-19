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
  ARTICLE_UPDATED
 } from 'Settings';


 const defaultState ={
   title:'',
   body_text:'',
   image_url:'',
   date_of_creation :'',
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
     
      default:
        return state;

   }

 }
