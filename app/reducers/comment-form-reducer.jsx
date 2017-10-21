import {
    COMMENT_VALUE_CHANGED
} from 'Settings'

const defaultState = {
    comment_value:''
}

export const commentFormReducer=(state=defaultState,action)=>{
    switch(action.type){
        case COMMENT_VALUE_CHANGED:
            return{
                ...state,
                comment_value:action.payload
            }

        default:
            return state;
    }
}