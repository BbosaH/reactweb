/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-11T09:05:30+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: container.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-12T16:19:05+03:00
 */



import  React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LoginComponent from 'LoginComponent'
import CreateAccountComponent from 'CreateAccountComponent'



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
            <LoginComponent/>
          </div>
          <div className="col-sm-6">
            <CreateAccountComponent/>
          </div>

        </div>
      </div>

    );
  }

};

export default HomeContainer;
