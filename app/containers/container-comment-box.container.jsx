import React,{Component} from 'react';
import {connect} from 'react-redux';
import './../styles/comment-box-style.css';
import CommentForm from 'CommentForm';
import DisplayComments from 'DisplayComments';
import {setCommentsFlagAction,setCommentFormFlagAction} from 'Actions'

class CommentBox extends Component{

    renderCommentDisplay=()=>{
       return(
           <DisplayComments/>
       )
    }

    renderCommentForm=()=>{
        return(
            <CommentForm/>
        )
    }

    setCommentsFlag=()=>{
        const{dispatch}=this.props;
        dispatch(setCommentsFlagAction());
    
     }
 
     setCommentFormFlag=()=>{
    
        const{dispatch}=this.props;
        dispatch(setCommentFormFlagAction());
     }


    render(){
      const {dispatch,show_comment_form,show_comments}=this.props;
      return(
        <div className="container">
        <div className="row">
            <div className="col-sm-10 col-sm-offset-1" id="logout">

                <div className="page-header">
                    <h3 className="reviews">Leave your comment</h3>
                    <div className="logout">
                                    
                    </div>
                </div>

                <div className="comment-tabs">
                    <ul className="nav nav-tabs" role="tablist">
                        <li onClick={this.setCommentsFlag}><button className="btn btn-dark"  role="tab" data-toggle="tab"><h4 className="reviews text-capitalize">Comments</h4></button></li>
                        <li onClick={this.setCommentFormFlag}><button className="btn btn-dark"  role="tab" data-toggle="tab"><h4 className="reviews text-capitalize">Add comment</h4></button></li>
        
                    </ul>            
                    <div className="tab-content">
                        {

                            (show_comment_form)?
                            <CommentForm/>:<DisplayComments/> 
                        }
                    </div>
                </div>
            </div>
        </div>

        </div>
        )
    }
}
export default connect(
    (state)=>{
        const {commentBoxReducer}=state;
        const{
            show_comment_form,
            show_comments
            }=commentBoxReducer;
        return{
            show_comment_form,
            show_comments
        }
    }
    
)(CommentBox)