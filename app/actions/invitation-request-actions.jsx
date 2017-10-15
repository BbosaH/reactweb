/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-15T09:01:13+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: invitation-request-actions.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-15T13:01:43+03:00
 */


 import firebase,{firebaseRef} from 'FirebaseIndex'

 import{
   LOGIN_USER,
   EMAIL_CHANGED,
   LOGIN_USER_SUCCESS,
   LOGIN_EMAIL_CHANGED,
   PASSWORD_CHANGED,
   LOGIN_USER_FAIL,
   INVITATION_REQUESTS_UPDATED,
   LOGIN_REDIRECT_ACCEPTED
 } from 'Settings'

 import {constructArrayFromFirebaseArray} from 'Utility'

 export const fetchInvitationRequests=()=>{
   return (dispatch)=>{
    //  dispatch({type: INVITATION_REQUESTS_UPDATED})
     const invitationRef =firebaseRef.child('invitation_requests');
     invitationRef.on('value',(snapshot)=>{

         var invitation_requests = constructArrayFromFirebaseArray(snapshot.val());
         dispatch({
           type: INVITATION_REQUESTS_UPDATED,
           payload: invitation_requests
         })
         //console.log("The Requests-->",invitation_requests);
     },(err)=>{

     })

   }
 }

 export const clickInvitationItemAction =(id)=>{

   return (dispatch) => {

     dispatch({type: INVITATION_ITEM_CLICKED});

   };
 }
