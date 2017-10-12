/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-13T01:10:05+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: store-config.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-13T01:59:12+03:00
 */

import {createStore, applyMiddleware,combineReducers,compose} from 'redux';

import {changeEmailReducer,changePasswordReducer,loginReducer,} from "LoginReducers"

export const config =()=>{
   const combinedreducer = combineReducers({
     changeEmail : changeEmailReducer,
     changePassword :changePasswordReducer,
     login :changePasswordReducer

   });

   const store = createStore(combinedreducer,compose(window.devToolsExtension?
     window.devToolsExtension() : f=>f));

  return store;
}
