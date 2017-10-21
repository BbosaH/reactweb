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
   ARTICLE_IMAGE_CHANGED,
   SELECT_TOPIC_CHANGED,
   UPDATE_TOPICS,
   ARTICLE_MESSAGE_CHANGED

 } from 'Settings';
 import RichTextEditor from 'react-rte';

 const defaultState ={
   title:'',
   body_text:'',
   image_url:'',
   date_of_creation :'',
   article_message:'',
   topic:{

   }
   ,
   user :{
     
   },
   comments:[

   ],
   likes :[
     
   ],
   topics :[

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
          article_message:''

         
        }
      case ARTICLE_IMAGE_CHANGED:
        return{
          ...state,
          image_url:action.image_url
         
        }

      case ARTICLE_MESSAGE_CHANGED:
        return{
          ...state,
          article_message:"Empty fields Required !!!"
         
        }
      case UPDATE_TOPICS:
        return{
          ...state,
          topics:[
            
              ...state.topics,
              ...action.payload
            
          ]
         
        }  
      case SELECT_TOPIC_CHANGED:
        return{
          ...state,
          topic: state.topics.filter((topic)=>{
              return topic.id===action.payload
          }).reduce((acc,val)=>{
              return{
                ...acc,
                ...val
              }

          },{})
         
        }  
     default:
      return state;

   }

 }
