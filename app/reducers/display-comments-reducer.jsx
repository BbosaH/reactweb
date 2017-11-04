import {ARTICLE_COMMENTS_UPDATED} from 'Settings'

 const defaultState ={
     comments:[

     ]
 }

 export const displayCommentsReducer=(state=defaultState,action)=>{

    switch(action.type){
        
        default:
            return state;
    }

 }