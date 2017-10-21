import {TOPIC_ARTICLES_UPDATED} from 'Settings';
const defaultState ={
    topic_articles:[

    ]
}
export const sideArticleListReducer=(state=defaultState,action)=>{
    switch(action.type){
        case TOPIC_ARTICLES_UPDATED:
            return{
                ...state,
                ...defaultState,
                topic_articles:action.payload

            }
        default:
            return state;
    }
}