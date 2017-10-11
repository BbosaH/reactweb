/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-11T09:05:30+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: container.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-11T18:02:55+03:00
 */



import  React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';



class HomeContainer extends  Component {

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <img src='../app/img/town.jpg' alt="home town" />
          </div>

        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-12">
                <input type="text" placeholder="enter email"/>
              </div>
              <br/>
              <div className="col-sm-12">
                <input type="password" placeholder="enter password"/>
              </div>
              <br/>
              <div className="col-sm-12">
                <button className="btn btn-success">Login</button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <a href="#"><h1>Create New Account</h1></a>
          </div>

        </div>
      </div>

    );
  }

};

export default HomeContainer;
