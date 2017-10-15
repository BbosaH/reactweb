/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-15T08:59:27+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: component-request-item.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-15T13:13:56+03:00
 */
import React from 'react'
const InvitationRequestItem =(props)=>{
  return(
    <li className="list-group-item" style={{cursor:'pointer'}}>

     <h5><text style={{width:150}}>{props.invitation.email}</text>
     &nbsp;&nbsp;<text style={{color:"#787878" , fontWeight:"bold"}}>
     {props.invitation.status}</text>
   <button  className="btn btn-success"style={{marginLeft:20}}>send Invitation</button>
   <button  className="btn btn-danger"style={{marginLeft:10}}>Reject</button>

   </h5>

    </li>
  )
}
export default InvitationRequestItem;
