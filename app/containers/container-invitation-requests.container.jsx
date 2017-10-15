/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-15T08:28:55+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: container-invitation-requests.container.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-15T23:36:32+03:00
 */
import React,{Component} from 'React'
import InvitationRequestItem from 'InvitationRequestItem';
import {connect} from 'react-redux';
import {fetchInvitationRequests} from 'InvitationRequestActions'
import {sendInvitationToEmailAction,rejectInvitationAction} from 'InvitationRequestActions'

 class InvitationRequestList extends Component{


   componentWillMount() {
     //console.log("The porpsddoo are",this.props);
     const {dispatch}=this.props
     dispatch(fetchInvitationRequests())
     //this.createDataSource(this.props)

   }

   sendInvitation(dispatch,invitation){

      //console.log("ffjjfj",invitation.status)
      dispatch(sendInvitationToEmailAction(invitation.id,invitation.email))
   }
   rejectInvitation(dispatch,invitation){

      //console.log("ffjjfjjajasj",invitation.email)
      dispatch(rejectInvitationAction(invitation.id));
   }

    renderInvitations(invitations){


      return invitations.map((invitation)=>{
        return (
          <InvitationRequestItem key={invitation.id} invitation={invitation} func={this.sendInvitation} func2={this.rejectInvitation}/>
        )
      });

    }
   render(){
     const {invitations}=this.props

     return(
       <div className="row">
         <div className="col-sm-6">
           <h3 className="text-center">Account Invitation Requests</h3>
            <div className="well" style={{maxHeight: 300, overflow:'auto'}}>
        		<ul className="list-group checked-list-box">
                  {this.renderInvitations(invitations)}
                </ul>
            </div>

        </div>
      </div>
     )

   }
 }
export default connect(
  (state)=>{
    const {invitationRequest}=state;
    const {invitations}=invitationRequest;
    return {invitations}
  }
)(InvitationRequestList)
