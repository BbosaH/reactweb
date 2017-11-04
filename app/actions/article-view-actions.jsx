import{
  ARTICLE_UPDATED,
  ARTICLE_CLICKED
 } from 'Settings';
 import {defaultifyState} from 'Actions'

 export const updateArticle=(article)=>{
     return{
         type:ARTICLE_UPDATED,
         payload:article
     }
 }

 export const articleItemClicked=(params)=>{
  
        
    return(dispatch)=>{
        dispatch(defaultifyState());
        dispatch({
            type: ARTICLE_CLICKED,
            payload:params

        }); 
    }
 }
 