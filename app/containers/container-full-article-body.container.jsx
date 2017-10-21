import React,{Component} from 'react';
import {connect} from 'react-redux';
import {formatDate} from 'Utility'
class FullArticleBody extends Component{
    render(){
        const {dispatch,id, title, body_text,image_url,
            date_of_creation , redirect_to_detail,user ,topic ,comments,
            likes }=this.props;
        return(

            <div className="col-sm-7">
                
                <div className="featured-article">
                    <a href="#">
                        <img src={image_url} alt="" style={{height:300,width:600}} className="thumb"/>
                    </a>
                    <h1>{title}</h1>
                    <p>{body_text}</p>
                    <p>Posted  by: {user.name} </p>
                    <div>
                <span className="badge"> {formatDate(date_of_creation)}</span><div className="pull-right">
                <span className="label label-default">alice</span>
                <span className="label label-primary">{topic.name}</span> <span className="label label-success">blog</span> 
                <span className="label label-info">personal</span> <span className="label label-warning">Warning</span>
                <span className="label label-danger">Danger</span></div>         
                    </div>
                    <hr/>
                </div>
                
            </div>
            
        )
    }
}
export default connect(
    (state)=>{
        
            const {articleViewReducer}=state;
        
            const {id, title, body_text,image_url,
            date_of_creation , redirect_to_detail,user ,topic ,comments,
            likes } = articleViewReducer;
        
            return{id, title, body_text,image_url,
            date_of_creation , redirect_to_detail,user ,topic ,comments,
            likes }
          }
)(FullArticleBody)