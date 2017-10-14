/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-12T16:21:07+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: login-reducers.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-14T08:33:38+03:00
 */
 import{
   LOGIN_USER,
   LOGIN_USER_SUCCESS,
   EMAIL_CHANGED,
   PASSWORD_CHANGED,
   LOGIN_USER_FAIL
 } from 'Settings'

const defaultState = {
  email : '',
  password :'',
  login_error:'',
  loading : false,
  user : null
}

export const loginReducer =(state=defaultState,action)=>{
  switch(action.type){
    case EMAIL_CHANGED:
    return {
      ...state,
      email:action.payload
    }
    case PASSWORD_CHANGED:
    return{
      ...state,
      password:action.payload
    }
    case  LOGIN_USER :
     return {
       ...state,
       loading: true,
       login_error: ''
     };
     case LOGIN_USER_SUCCESS:
       return {
         ...state,
         ...defaultState,
         user: action.payload,
         loading: false
       };
     case  LOGIN_USER_FAIL:
       return {
         ...state,
         error: 'Authentication failed.',
         password: '',
         loading: false
      };
    default :
      return state;
  }

}
