/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-12T15:46:36+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: login.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-12T15:56:18+03:00
 */
import React,{Component} from 'React';



class LoginComponent extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
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
    )
  }
}

export default LoginComponent;
