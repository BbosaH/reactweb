/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-12T16:26:28+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: login-actions.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-14T11:58:35+03:00
 */

import firebase,{firebaseRef} from 'FirebaseIndex'
import{
  LOGIN_USER,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_FAIL
} from 'Settings'

export const loginAction =(email,password)=>{

  return (dispatch) => {
    dispatch({type: LOGIN_USER});

    firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            //.catch((error) => {console.log("The error :" ,error)});
            .catch(() => loginUserFail(dispatch));
  };
}
export const emailChangeAction =(email)=>{
  return {
    type: EMAIL_CHANGED,
    email
  }
}
export const passwordChangeAction =(password)=>{
  return {
    type : PASSWORD_CHANGED,
    password
  }
}

const loginUserFail = (dispatch) => {
  dispatch({type: LOGIN_USER_FAIL})
}

const loginUserSuccess = (dispatch, user) => {
  console.log("The user brought => " ,user);
  dispatch({
    type   : LOGIN_USER_SUCCESS,
    payload: user
  })

}
