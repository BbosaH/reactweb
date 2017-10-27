import React ,{Component} from 'react';
import {connect} from 'react-redux';
import './../styles/comment-box-style.css';
import {changeCommentValue,submitCommentAction} from 'Actions'

class CommentForm extends Component{
   
    changeComment =()=>{
        const {dispatch,comment_value}=this.props;
        dispatch(changeCommentValue(this.refs.comment.value))
    }
    submitComment=()=>{
        const{
            dispatch,
            article_id,
            user,
            date_of_creation,
            comment_value
        } = this.props;
        const params ={article_id,user,date_of_creation,comment_value}
        dispatch(submitCommentAction(params))

    }
   render(){
        const {comment_value}=this.props;
        return(
           
        
         <div  id="add-comment">
             
            <form  method="post" className="form-horizontal" id="commentForm" role="form"> 
                <div className="form-group">
                    <label  className="col-sm-2 control-label">Comment</label>
                    <div className="col-sm-10">
                      <textarea className="form-control"  ref="comment" name="addComment" id="addComment" rows="5" onChange={this.changeComment}></textarea>
                    </div>
                </div>
               
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">                    
                        <button onClick={this.submitComment} className="btn btn-success btn-circle text-uppercase" type="button"><span className="glyphicon glyphicon-send"></span> Summit comment</button>
                    </div>
                </div>            
            </form> 
        </div>

            
        )

   }
}
export default connect(
    (state)=>{
        
        const {commentFormReducer,articleViewReducer,login}=state;
        const {comment_value}=commentFormReducer;
        const {id}=articleViewReducer;
        const article_id=id;
        const {user}=login;
        const date_of_creation = new Date().getTime()

        return {
            article_id,
            user,
            date_of_creation,
            comment_value
        }
    }
) (CommentForm)