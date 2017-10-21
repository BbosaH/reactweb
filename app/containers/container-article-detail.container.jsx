import React,{Component} from 'react';
import {connect} from 'react-redux';
import CommentBox from 'CommentBox'
import SideArticleList from 'SideArticleList'
import FullArticleBody from 'FullArticleBody'

class ArticleDetail extends Component{

    render(){

     

        return(
      
        <div className="row">

            <FullArticleBody/>
            <SideArticleList/>
            <CommentBox/>
            
        </div>
        
        

        )

    }



}

export default connect(
  
)(ArticleDetail)