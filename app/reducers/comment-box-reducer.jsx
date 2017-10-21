import {
    SHOW_COMMENTS,
    SHOW_COMMENT_FORM
} from 'Settings';

const defaultState ={
    show_comment_form :false,
    show_comments:true
}
export const commentBoxReducer=(state=defaultState,action)=>{
    switch(action.type){
        case SHOW_COMMENTS:
            return{
                ...state,
                ...defaultState,
                show_comments:true
            }
        case SHOW_COMMENT_FORM:
            return{
                ...state,
                show_comments:false,
                show_comment_form:true

            }
        default:
            return state;

    }
}