import {ARTICLE_COMMENTS_UPDATED} from 'Settings'

 const defaultState ={
     comments:[

     ]
 }

 export const displayCommentsReducer=(state=defaultState,action)=>{

    switch(action.type){
        case ARTICLE_COMMENTS_UPDATED:
            return{
                ...state,
                comments: action.payload
            }
        default:
            return state;
    }

 }