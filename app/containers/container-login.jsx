/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-12T15:46:36+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: login.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-14T11:40:44+03:00
 */
import React,{Component} from 'React';
import {connect} from 'react-redux';
import {loginAction,emailChangeAction,passwordChangeAction} from 'Actions'



export class LoginComponent extends Component{
  constructor(props){
    super(props);
  }

  onChangeEmail(dispatch){
    // var email = this.refs.email.value;
    // dispatch(emailChangeAction(email))
  }
  onChangePassword(dispatch){
    // var password =this.refs.password.value;
    // dispatch(passwordChangeAction(password));
  }

  render(){
    const {dispatch}=this.props;

    return (
      <div className="row">
        <div className="col-sm-12">

          <input type="email" value="" placeholder="enter email"  onChange={
              this.onChangeEmail(dispatch)}/>

        </div>
        <br/>
        <div className="col-sm-12">
          <input type="password"  value="" placeholder="enter password"  onChange={this.onChangePassword(dispatch)}/>

        </div>
        <br/>
        <div className="col-sm-12">
          <button className="btn btn-success" onClick={()=>{
              dispatch(loginAction())
            }}>Login</button>
        </div>
      </div>
    )
  }
}

export default connect(

)(LoginComponent);
