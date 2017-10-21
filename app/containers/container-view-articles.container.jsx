/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-17T17:09:50+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: conitainer-view-articles.container.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-18T06:43:05+03:00
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import './../styles/view-articles.css'
import {constructArrayFromFirebaseArray} from 'Utility'
import {fetchArticlesAction,updateArticle} from 'Actions'
import ArticleView from 'ArticleView'

class ViewArticles extends Component{
  

  componentWillMount(){

    const{dispatch}=this.props;
    dispatch(fetchArticlesAction());
    
    
  }
  renderArticles(articles){
    const{dispatch,my_filter,user}=this.props;
    if(my_filter){

      return articles.filter((article)=>{
            return article.user.id===user.id
      }).map((article)=>{
        return (
          <ArticleView key={article.id} {...article}/>
        )
      });
      
    }else{
      return articles.map((article)=>{
        return (
          <ArticleView key={article.id} {...article}/>
        )
     });

    }
    return;
    
   

  }
 render(){
   const {articles}=this.props
   console.log("the areticles==>",articles)
   return(

       <div className="row">
           {this.renderArticles(articles)}
       </div>

   )
 }
}
export default connect(
  
  (state)=>{
    const {articlesReducer,treeReducer,login}=state;
    const {my_filter}=treeReducer;
    const {articles}=articlesReducer;
    const {user}=login
    return{
      articles,
      my_filter,
      user
    }
  }
)(ViewArticles)
