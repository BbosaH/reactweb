/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-12T16:26:28+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: login-actions.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-13T01:02:58+03:00
 */
export const loginAction =(email,password)=>{
  return{
    type : "LOGIN_USER",
    email,
    password

  }
}
export const emailChangeAction =(email)=>{
  return {
    type: 'EMAIL_CHANGED',
    email
  }
}
export const passwordChangeAction =(password)=>{
  return {
    type : 'PASSWORD_CHANGED',
    password
  }
}
