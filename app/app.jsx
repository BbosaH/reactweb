/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-11T09:05:30+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: yulu
 * @Filename: app.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-11T11:13:03+03:00
 */



import React from 'react'
import ReactDOM from 'react-dom'
import Container from 'Container'
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <Container></Container>
      </div>
      <div className="col-sm-4">
        <h1>React Boilerplate</h1>
        <label>React Boilerplate</label>
        <input type="text"/>
        <button className="btn btn-success">hi</button>
      </div>
      <div className="col-sm-4">
      </div>
    </div>
  </div>
 ,
  document.getElementById('app')
);
