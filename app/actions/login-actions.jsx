/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-12T16:26:28+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: login-actions.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-15T07:38:20+03:00
 */

import firebase,{firebaseRef} from 'FirebaseIndex'

import{
  LOGIN_USER,
  EMAIL_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_FAIL,
  LOGIN_REDIRECT_ACCEPTED
} from 'Settings'

import {constructArrayFromFirebaseArray} from 'Utility'

export const loginAction =(email,password)=>{

  return (dispatch) => {
    dispatch({type: LOGIN_USER});

    const userRef=firebaseRef.child('Users');
    userRef.orderByChild("email").equalTo(email).once('value')
    .then((snapshot)=>{
      //returned array of one users
      var users = snapshot.val()
      users = constructArrayFromFirebaseArray(users)
      users=users.map((user)=>{
        if(user.password===password){
           return user;
        }
        return []._;
      }).filter(function( element ) {
         return element !== []._;
      });
      users.length> 0 ? loginUserSuccess(dispatch, users[0]) : loginUserFail(dispatch)

      console.log("The users are ",users);
      //loginUserSuccess = (dispatch, user)
      // var key = keys[0];
      // //logging userof that key
      // console.log(users[key].email)
    },(err)=>{
      console.log("failed to get User because => "+e);
    })
  };
}
export const loginEmailChangeAction =(email)=>{
  return {
    type: LOGIN_EMAIL_CHANGED,
    email
  }
}
export const loginPasswordChangeAction =(password)=>{
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
