/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-12T16:21:07+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: login-reducers.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-15T07:35:21+03:00
 */
 import{
   LOGIN_USER,
   LOGIN_USER_SUCCESS,
   LOGIN_EMAIL_CHANGED,
   PASSWORD_CHANGED,
   LOGIN_USER_FAIL,
   LOGIN_REDIRECT_ACCEPTED

 } from 'Settings'

const defaultState = {
  email : '',
  password :'',
  login_message:'',
  loading : false,
  should_redirect: false,
  user : null
}

export const loginReducer =(state=defaultState,action)=>{
  switch(action.type){
    case LOGIN_EMAIL_CHANGED:
    return {
      ...state,
      email:action.email
    }
    case PASSWORD_CHANGED:
    return{
      ...state,
      password:action.password
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
         login_message:'Success fully logged in!!!',
         user: action.payload,
         should_redirect : true,
         loading: false
       };
     case  LOGIN_USER_FAIL:
       return {
         ...state,
         login_message: 'User does not exist.!!!',
         loading: false
      };
    default :
      return state;
  }

}
