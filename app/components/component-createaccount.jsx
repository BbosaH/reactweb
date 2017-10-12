/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-12T15:57:57+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: component-createaccount.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-12T16:05:08+03:00
 */
import React, {Component} from 'react';

class CreateAccountComponent extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="row">
        <div className="col-sm-12">
          <input type="text" placeholder="enter email"/>
        </div>
        <br/>

        <br/>
        <div className="col-sm-12">
          <a href="#"><h1>Create New Account</h1></a>
        </div>
      </div>

    )
  }
}

export default CreateAccountComponent
