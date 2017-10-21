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
   ARTICLE_IMAGE_CHANGED,
   UPDATE_TOPICS,
   SELECT_TOPIC_CHANGED,
   ARTICLE_MESSAGE_CHANGED
 } from 'Settings'

 import {constructArrayFromFirebaseArray,objectIsEmpty} from 'Utility'


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
    if(objectIsEmpty(params.topic) || !params.title || !params.body_text){
      dispatch(articleMessageChangedAction());
    }else{
      firebaseRef.child('articles').push(params)
      dispatch({type : ARTICLE_SUBMITED,
      payload:params});

    }
  
   
  }
}
export const selectTopicAction =(topic_id)=>{
  return{
    type : SELECT_TOPIC_CHANGED,
    payload:topic_id,
  }
}
export const articleMessageChangedAction=()=>{
  return{
    type : ARTICLE_MESSAGE_CHANGED,
  
  }
}
 export const updateTopicsAction =()=>{
   return(dispatch)=>{
     const topicsRef = firebaseRef.child('topics');
     topicsRef.on('value',(snapshot)=>{

         var topics = constructArrayFromFirebaseArray(snapshot.val());
         
         
         dispatch({
          type : UPDATE_TOPICS,
          payload:topics
         })
         //console.log("The Requests-->",invitation_requests);
     },(err)=>{

     })
     

   }
 }
