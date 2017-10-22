import{
    ARTICLES_FETCHED,
    ARTICLES_UPDATED

 } from 'Settings'

const defaultState={
  full_articles:[

  ],
  articles:[

  ]
}

export const articlesReducer=(state=defaultState,action)=>{
    switch(action.type){
        case ARTICLES_FETCHED:
            return{
                ...state,
                ...defaultState,
                articles:action.payload,
                full_articles:action.payload
            }
        case ARTICLES_UPDATED :
            return{
                ...state,
                articles:action.payload,
            }
        default:
            return state;
    }
}