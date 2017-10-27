import React,{Component} from 'react'
import './../styles/comment-box-style.css'
import {connect} from 'react-redux';
import DisplayComment from 'DisplayComment'
import {fetchArticleComments} from 'Actions'


class DisplayComments extends Component{
  
   componentWillMount(){
      const{dispatch,article_id}=this.props;
      dispatch(fetchArticleComments(article_id))
   }
  renderComments =(comments)=>{
    return comments.map((comment)=>{
      return(
        <DisplayComment key={comment.id} {...comment}/>
      )
    });
  }

  render(){

    const {comments}=this.props;

    return(
      
          <div className="tab-pane active" id="comments-logout">                
              <ul className="media-list">

                    {this.renderComments(comments)}       
                 
              </ul> 
          </div>
      
       )

  }

}

export default connect(

  (state)=>{
    
    const{articleViewReducer,displayCommentsReducer}=state;
    const {comments}= displayCommentsReducer;
    const {id}=articleViewReducer;
    const article_id =id;

    return{
      article_id,
      comments:comments.reverse()
    }
  }

) (DisplayComments);