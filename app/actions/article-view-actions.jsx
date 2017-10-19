import{
  ARTICLE_UPDATED
 } from 'Settings';

 export const updateArticle=(article)=>{
     return{
         type:ARTICLE_UPDATED,
         payload:article
     }
 }