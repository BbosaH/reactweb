/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-11T09:05:30+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: container.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-11T11:05:39+03:00
 */



import  React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Container extends  Component {

  render(){
    return(
      <div className="container">
        <div className="panel panel-body">
          <h1>This is the topleft compoent</h1>
        </div>

      </div>

    );
  }

};

export default Container;
