/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-17T17:57:15+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: tree-reducer.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-17T19:18:38+03:00
 */

  import{
    SHOW_ARTICLES,
    CREATE_ARTICLE
  } from 'Settings'

  const defaultState ={

    redirect_show_articles:false,
    redirect_create_article:false,


    data : {
        name: 'Articles',
        toggled: true,
        children: [
            {
                name: 'Create Article',
                children: [
                    { name: 'child1' },
                    { name: 'child2' }
                ]
            },
            {
                name: 'View Articles',
                loading: true,
                children: []
            },
            {
                name: 'Edit Articles',
                children: [
                    {
                        name: 'nested parent',
                        children: [
                            { name: 'nested child 1' },
                            { name: 'nested child 2' }
                        ]
                    }
                ]
            }
        ]
    }
  }

  export const treeReducer =(state=defaultState,action)=>{
    switch (action.type) {
      case SHOW_ARTICLES:
       return{
         ...state,
         ...defaultState,
         redirect_show_articles:true

       }
      case CREATE_ARTICLE:
        return{
          ...state,
          ...defaultState,
          redirect_create_article:true

        }
      default:
       return state;

    }

  }
