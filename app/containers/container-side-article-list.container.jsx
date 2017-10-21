import React,{Component} from 'react';
import {connect} from "react-redux"
import {fetchTopicArticlesAction} from 'Actions'
import SideArticle from 'SideArticle'

class SideArticleList extends Component{


    renderTopicArticles=(topic_articles,id)=>{
       
        return topic_articles
        .filter((topic_article)=>{
            return topic_article.id !== id;
        })
        .map((topic_article)=>{
            return (
                
                <SideArticle key={topic_article.id} {...topic_article}/>
              
            )
        });
        
    }

    render(){
        const {topic_articles,id}=this.props;
        return(
            <div className="col-sm-5">
                <ul className="media-list main-list">

                        {this.renderTopicArticles(topic_articles,id)}
                   
                </ul>
            </div> 
        )
    }
}
export default connect(
    (state)=>{

        
            const {articlesReducer,articleViewReducer}=state;

        
            const {articles}=articlesReducer;
            const {topic,id}=articleViewReducer;
            const topic_id=topic.id;
            console.log("The id is hohohoh",topic_id)
            const topic_articles = articles.filter((article)=>{
                    
                    return article.topic.id === topic_id;
            }) 
            console.log("The topic artsoos is hohohoh",topic_articles)
            
        
            return{topic_articles,id}
          }
         
          
             
)(SideArticleList)