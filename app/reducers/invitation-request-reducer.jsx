/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-15T08:56:06+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: invitation-request-reducer.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-15T13:01:23+03:00
 */
 import{
   LOGIN_USER,
   LOGIN_USER_SUCCESS,
   LOGIN_EMAIL_CHANGED,
   PASSWORD_CHANGED,
   LOGIN_USER_FAIL,
   LOGIN_REDIRECT_ACCEPTED,
   INVITATION_REQUESTS_UPDATED,
   INVITATION_ITEM_CLICKED

 } from 'Settings'

const defaultState ={
  invitations:[
    
  ]
}

export const invitationRequestReducer = (state=defaultState,action)=>{
   switch(action.type){
     case INVITATION_ITEM_CLICKED:
     return {
       ...state,
       ...defaultState

     }
     case INVITATION_REQUESTS_UPDATED:
        return {
          ...state,
          invitations:[
            ...state.invitations,
            ...action.payload
          ]
        }

     default:
      return state;

   }

}
