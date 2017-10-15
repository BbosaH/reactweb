/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-15T08:59:27+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: component-request-item.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-15T23:28:31+03:00
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'

class InvitationRequestItem extends Component{


  onSendPress(dispatch,invitation){
        this.props.func(dispatch,invitation);
  }
  onRejectPress(dispatch,invitation){
        this.props.func2(dispatch,invitation);
  }

  render(){
    const {dispatch}=this.props

    return(


      <li className="list-group-item" style={{cursor:'pointer'}}>
       <h5>
         <text style={{width:150}}>{this.props.invitation.email}</text>
         &nbsp;&nbsp;<text style={{color:"#787878" , fontWeight:"bold"}}>
         {this.props.invitation.status}</text>
       <button  className="btn btn-success"style={{marginLeft:20}} onClick={()=>{this.onSendPress(dispatch,this.props.invitation)}}>send Invitation</button>
         <button  className="btn btn-danger"style={{marginLeft:10}} onClick={()=>{this.onRejectPress(dispatch,this.props.invitation)}}>Reject</button>
       </h5>
      </li>
    )

  }

}
export default connect() (InvitationRequestItem);
