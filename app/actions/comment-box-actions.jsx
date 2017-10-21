import {
    SHOW_COMMENTS,
    SHOW_COMMENT_FORM
} from 'Settings'

export const setCommentsFlagAction=()=>{
    return{
        type : SHOW_COMMENTS
    }
}

export const setCommentFormFlagAction=()=>{
    return{
        type : SHOW_COMMENT_FORM
    }
}