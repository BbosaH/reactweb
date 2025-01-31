/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-13T09:13:17+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: create-account-actions.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-15T07:07:13+03:00
 */
 import firebase,{firebaseRef} from 'FirebaseIndex'
 import {
   EMAIL_CHANGED,
   REQUEST_INVITATION,
   REQUEST_INVITATION_FAIL,
   REQUEST_INVITATION_SUCCESS,
   REGISTER_USER,
   REGISTRATION_USER_FAIL,
   WRONG_EMAIL_PROVIDED,
   INVITATION_REQUEST_STATUS_PENDING
 } from 'Settings'


 export const emailChangeAction = (email) => {
   return {
     type   : EMAIL_CHANGED,
     email,
   }
 }

 export const requestInvitationAction =(email)=>{

   return (dispatch) => {
     dispatch({
       type: REQUEST_INVITATION
     });

     firebaseRef.child("invitation_requests").push({
       email : email,
       status: INVITATION_REQUEST_STATUS_PENDING
     }).then(user => requestInvitationSuccess(dispatch))
       .catch(() => requestInvitationFailed(dispatch));

      //  firebaseRef.child("topics").push({
      //    name  : 'React native',
      //    description : 'This is about reacts mobile platform',
      //    no_of_articles: 0
      //  })
      
      // firebaseRef.child("topics").push({
      //   name  : 'React',
      //   description : 'This is about facebooks react library  platform',
      //   no_of_articles: 0
      // })

      // firebaseRef.child("topics").push({
      //    name  : 'Web development',
      //    description : 'This is about web dev entirely',
      //    no_of_articles: 0
      //  })
      
      // firebaseRef.child("topics").push({
      //   name  : 'Firebase db',
      //   description : 'This is about firebase as a database',
      //   no_of_articles: 0
      // })

      // firebaseRef.child("topics").push({
      //    name  : 'Angular js',
      //    description : 'This is about googgles web platform',
      //    no_of_articles: 0
      //  })
      
      // firebaseRef.child("topics").push({
      //   name  : 'Graph ql',
      //   description : 'This is about new data fetching techniques',
      //   no_of_articles: 0
      // })

   };
 }

 const requestInvitationSuccess=(dispatch) =>{
   dispatch(
     {
       type: REQUEST_INVITATION_SUCCESS
     }
   )
 }

 const requestInvitationFailed=(dispatch) =>{
   dispatch({type: REQUEST_INVITATION_FAIL})
 }

 export const WrongEmailProvided = () => {
   return {
     type   : WRONG_EMAIL_PROVIDED,
   }
 }





 export const registerUser = (email,password) => {
   return (dispatch) => {
     dispatch({type: REGISTER_USER});

     firebase.auth().createUserWithEmailAndPassword(email, password)
             .then(user => registrationUserSuccess(dispatch))
             .catch(() => registrationUserFail(dispatch));
   };

 };

 const registrationUserSuccess = (dispatch) => {
   dispatch({type: REGISTRATION_USER_SUCCESS})
 }

 const registrationUserFail = (dispatch) => {
   dispatch({type: REGISTRATION_USER_FAIL})
 }
