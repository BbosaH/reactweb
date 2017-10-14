/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-12T22:58:06+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: index.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-14T09:04:08+03:00
 */
 import {combineReducers} from 'redux';
 import {loginReducer} from "LoginReducer"
 import {createInvitationRequestReducer} from "CreateInvitationRequestReducer"

 const combinedreducer = combineReducers({

   login :loginReducer,
   createInvitationRequest:createInvitationRequestReducer

 });

 export default combinedreducer;
