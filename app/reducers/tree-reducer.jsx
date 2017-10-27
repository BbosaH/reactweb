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
    CREATE_ARTICLE,
    SHOW_MY_ARTICLES,
    MAKE_STATE_DEFAULT,
    SHOW_VIDEO_COURSES,
    CREATE_VIDEO_COURSES
  } from 'Settings'

  const defaultState ={

    redirect_show_articles:false,
    redirect_create_article:false,
    redirect_show_videos:false,
    redirect_create_videos:false,
    my_filter:false,


    data : {
        name: 'Articles',
        toggled: true,
        children: [
            {
                name: 'Create Article',
               
            },
            {
                name: 'View Articles',
                
            },
            {
                name: 'My Articles',
                
            }
        ]
    },
    data2 : {
        name: 'Videos',
        toggled: false,
        children: [
            {
                name: 'Create Video course',
               
            },
            {
                name: 'View Video courses',
                
            },
            {
                name: 'My videos',
                
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
     case SHOW_MY_ARTICLES:
        return{
          
          ...state,
          ...defaultState,
          redirect_show_articles:true,
          my_filter:true,

        }
      case MAKE_STATE_DEFAULT:
        return{
          ...state,
          ...defaultState,
        }
      case SHOW_VIDEO_COURSES:
        return{
          ...state,
          ...defaultState,
          redirect_show_videos:true,

        }
      case CREATE_VIDEO_COURSES:
        return{
          ...state,
          ...defaultState,
          redirect_create_videos:true
        }
      default:
       return state;

     }
     

  }
