import React,{Component} from 'react';
import {connect} from "react-redux"
import {fetchTopicArticlesAction} from 'Actions'
import {formatDate} from 'Utility'
import {articleItemClicked} from "Actions"

class SideArticle extends Component{

    itemClicked=()=>{
        
        const{dispatch,image_url,body_text,title,user,topic,id}=this.props
        const params =this.props
        dispatch(articleItemClicked(params))
      
    }

    render(){
        const{dispatch,image_url,body_text,title,user,topic,id,date_of_creation}=this.props
        return(
            
            
            <li className="media" onClick={this.itemClicked}>
                <a className="pull-left" href="#">
                <img className="media-object" src={image_url} alt="..."/>
                </a>
                <div className="media-body">
                <h4 className="media-heading">{title}</h4>
                <p className="by-author">{user.name}</p>
                <p className="by-author">{formatDate(date_of_creation)}</p>
                </div>
            </li>
        )
    }
}
export default connect(
   
)(SideArticle)