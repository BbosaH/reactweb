/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-12T15:46:36+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: login.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-16T16:26:46+03:00
 */
import React,{Component} from 'React';
import {connect} from 'react-redux';
import {loginAction,loginEmailChangeAction,loginPasswordChangeAction} from 'Actions'
import DisplayMessage from 'DisplayMessage'
import {
  Redirect,
} from 'react-router-dom'




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

  login=()=>{
    
    const{dispatch,email,password}=this.props;
    dispatch(loginAction(email,password));
  }

  redirecttoHomePage(){

  }



  render(){
    const {dispatch,email,password,should_redirect,login_message}=this.props;

    return (
      <div className="row">
        <div className="col-sm-12">

          <input type="email" value={email} placeholder="enter email"  onChange={
                (e)=>{
                  dispatch(loginEmailChangeAction(e.target.value));
                 }
            }/>

        </div>
        <br/>
        <div className="col-sm-12">
          <input type="password"  value={password} placeholder="enter password"  onChange={

              (e)=>{
                dispatch(loginPasswordChangeAction(e.target.value));
               }
            }/>

        </div>
        <br/>
        <div className="col-sm-12">
          {(should_redirect)?

            <Redirect to="/home"/>
           :
           <button className="btn btn-success" onClick={this.login}>Login</button>
          }


        </div>
        <DisplayMessage message={login_message}/>
      </div>
    )
  }
}

export default connect(
  (state)=>{
      const {login}=state
      const {email,
      password ,
      login_message,
      loading,
      should_redirect,
      user}=login
      return{
        email,
        password ,
        should_redirect,
        login_message
      }
  }

)(LoginComponent);
