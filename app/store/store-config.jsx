/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-13T01:10:05+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: store-config.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-13T23:27:46+03:00
 */

import {createStore, applyMiddleware,combineReducers,compose} from 'redux';
import reduxthunk from 'redux-thunk';
import {ActionLogging,StateLogging} from 'Logging'

import combinedreducer from "CombinedReducer"

export const config =(initalState={})=>{


   const store = createStore(combinedreducer,initalState,compose(applyMiddleware(reduxthunk,ActionLogging,StateLogging),window.devToolsExtension?
     window.devToolsExtension() : f=>f));

    //  const store = createStore(combinedreducer,initalState,applyMiddleware(ReduxThunk));

  return store;
}
