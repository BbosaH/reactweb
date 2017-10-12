/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-12T16:21:07+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: login-reducers.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-13T01:53:16+03:00
 */


const defaultState = {
  email : '',
  password :''
}

export const loginReducer =(state=defaultState,action)=>{
  switch(action.type){
    case  'LOGIN_USER' :
     return {
       
       email : action.email,
       password : action.password
     }
    default :
      return state;
  }

}
export const changeEmailReducer =(state='',action)=>{
  switch(action.type){
    case 'EMAIL_CHANGED':
      return action.email
    default :
      return state;
  }
}

export const changePasswordReducer =(state='',action)=>{
  switch(action.type){
    case 'PASSWORD_CHANGED':
      return action.password
    default :
      return state;
  }
}
