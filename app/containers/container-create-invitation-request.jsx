/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-12T15:57:57+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: component-createaccount.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-14T13:07:39+03:00
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {emailChangeAction,requestInvitationAction} from 'Actions'
import DisplayMessage from 'DisplayMessage'

class CreateInvitationRequestComponent extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const {dispatch,email,invitationError, invitation_message}=this.props;
    return(
      <div className="row">
        <div className="col-sm-12">
          <input type="email" value={email} placeholder="enter email"  onChange={
              (e)=>{
                dispatch(emailChangeAction(e.target.value));
               }
            }/>
        </div>
        <br/>

        <br/>

        <div className="col-sm-12">
          <a href="#" onClick={()=>{
              dispatch(requestInvitationAction(email))
            }}><h1>Create New Account</h1></a>
        </div>
        <DisplayMessage message={invitation_message}/>



      </div>

    )
  }
}

const mapStateToProps =(state)=>{


}

export default connect(
  (state)=>{

    const {createInvitationRequest} = state
    const {email, invitationError, invitation_message} = createInvitationRequest;
    return {
      email,
       invitationError,
       invitation_message
     };


  }



)(CreateInvitationRequestComponent)
