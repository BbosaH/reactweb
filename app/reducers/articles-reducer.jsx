import{
    ARTICLES_FETCHED

 } from 'Settings'

const defaultState={
  articles:[

  ]
}

export const articlesReducer=(state=defaultState,action)=>{
    switch(action.type){
        case ARTICLES_FETCHED:
            return{
                ...state,
                articles:[
                    ...state.articles,
                    ...action.payload
                ]
            }
        default:
            return state;
    }
}