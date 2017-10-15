/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-13T09:13:39+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: create-account-reducers.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-15T06:56:11+03:00
 */

 import {
   EMAIL_CHANGED,
   REQUEST_INVITATION,
   REQUEST_INVITATION_SUCCESS,
   REQUEST_INVITATION_FAIL,
   REGISTER_USER,
   WRONG_EMAIL_PROVIDED,
   REGISTRATION_USER_SUCCESS,
   REGISTRATION_USER_FAIL
 } from 'Settings'

 const defaultState = {

   email : '',
   registrationError: '',
   invitationError:'',
   loading:false,
   invitation_message:''

 }

 export const createInvitationRequestReducer =(state=defaultState,action)=>{
   switch(action.type){
     case EMAIL_CHANGED:
     return {
       ...state,
       email:action.email
     }
     case  REQUEST_INVITATION :
      return {
        ...state,
        invitationError:''

      }

      case  REQUEST_INVITATION_SUCCESS :
       return {
         ...state,
         ...defaultState,
         invitation_message:'invitation will be sent to your email in 5 minutes'
       }

       case  REQUEST_INVITATION_FAIL :
        return {
          ...state,
          ...defaultState,
          invitation_message:'invitation Request Failed'
        }
     case REGISTER_USER:
      return {
        ...state,
        loading: true,
        registrationError: ''
      };
      case REGISTRATION_USER_SUCCESS:
        return {
          ...state,
          ...defaultState,
          user: action.payload,
          loading: false
        };

      case  REGISTRATION_USER_FAIL:
        return {
          ...state,
          registrationError: 'Registration failed.',
          password: '',
          loading: false
        };
        case  WRONG_EMAIL_PROVIDED:
          return {
            ...state,
            invitation_message: 'Wrong Email provided please use correct format.',
            password: '',
            loading: false
          };
     default :
       return state;
   }

 }
