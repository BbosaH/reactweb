/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-11T09:05:30+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: yulu
 * @Filename: app.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-14T13:20:26+03:00
 */



import React from 'react'
import ReactDOM from 'react-dom'
import IndexContainer from 'IndexContainer'
import 'bootstrap/dist/css/bootstrap.css';
import {Route,Router,IndexRoute,hashHistory} from 'react-router';
import {config} from 'ConfigureStore'
import {Provider} from 'react-redux'
import {emailChangeAction,loginAction,passwordChangeAction} from 'Actions'


const store = config();
store.subscribe(()=>{
  console.log("new state ==>",store.getState())
});
// store.dispatch(emailChangeAction("henrybbosa@gmail.com"));
// store.dispatch(passwordChangeAction("gloriagloria"));




ReactDOM.render(
  <Provider store={store}>
  <IndexContainer/>
  </Provider>
 ,
  document.getElementById('app')
);
