/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-11T09:05:30+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: yulu
 * @Filename: app.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-13T01:40:27+03:00
 */



import React from 'react'
import ReactDOM from 'react-dom'
import HomeContainer from 'HomeContainer'
import 'bootstrap/dist/css/bootstrap.css';
import {Route,Router,IndexRoute,hashHistory} from 'react-router';
import {config} from 'ConfigureStore'
import {emailChangeAction,loginAction,passwordChangeAction} from 'LoginActions'

const store = config();
store.subscribe(()=>{
  console.log("new state ==>",store.getState())
});
store.dispatch(emailChangeAction("henrybbosa@gmail.com"));
store.dispatch(passwordChangeAction("gloriagloria"));


ReactDOM.render(
  <HomeContainer/>
 ,
  document.getElementById('app')
);
