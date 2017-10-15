/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-12T22:58:06+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: index.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-15T10:04:23+03:00
 */
 import {combineReducers} from 'redux';
 import {loginReducer} from "LoginReducer"
 import {createInvitationRequestReducer} from "CreateInvitationRequestReducer";
 import {invitationRequestReducer} from "InvitationRequestReducer";

 const combinedreducer = combineReducers({

   login :loginReducer,
   createInvitationRequest:createInvitationRequestReducer,
   invitationRequest:invitationRequestReducer

 });

 export default combinedreducer;
