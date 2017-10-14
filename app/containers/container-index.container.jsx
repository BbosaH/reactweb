/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-11T09:05:30+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: container.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-14T13:15:47+03:00
 */



import  React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LoginComponent from 'LoginComponent'
import CreateInvitationRequestComponent from 'CreateInvitationRequestComponent'
import image from './../img/oldtown.png'




class IndexContainer extends  Component {

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <img src={image} alt="home town" />
          </div>

        </div>
        <div className="row">
          <div className="col-sm-6">
            <LoginComponent/>
          </div>
          <div className="col-sm-6">

            <CreateInvitationRequestComponent/>


          </div>

        </div>
      </div>

    );
  }

};

export default IndexContainer;
