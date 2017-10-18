/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-16T16:21:13+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: tile-reducer.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-16T17:13:34+03:00
 */

 import{
   NAVIGATED_TOSHAREDKNOWLEDGE
 } from 'Settings'

 const defaultState ={
   redirect_to_shared_knowledge:false
 }

 export const tileReducer =(state=defaultState,action)=>{
   switch (action.type) {
     case NAVIGATED_TOSHAREDKNOWLEDGE:
      return{
        ...state,
        ...defaultState,
        redirect_to_shared_knowledge:true

      }
     default:
      return state;

   }

 }
