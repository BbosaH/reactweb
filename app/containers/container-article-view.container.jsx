
/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-17T17:09:50+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: conitainer-article-view.container.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-18T06:43:05+03:00
 */

import React,{Component} from 'react'
import {connect} from 'react-redux'
import './../styles/view-articles.css'
import firebase,{firebaseRef} from 'FirebaseIndex'
import {ARTICLE_IMAGE_URL_PICK} from 'Settings'
import DisplayMessage from 'DisplayMessage'
import {articleItemClicked} from "Actions"
import ReactHtmlParser, { processNodes,
 convertNodeToElement, htmlparser2 } from 'react-html-parser';
 

class ArticleView extends Component{
  
  
  itemClicked=()=>{
  
  const{dispatch,image_url,body_text,title,user,topic,id}=this.props
  const params =this.props
  dispatch(articleItemClicked(params))

  }
  
 render(){
   const{dispatch,image_url,body_text,title,user,topic,id}=this.props
   const htmlText = body_text;
  
   return(
       
         <div className=" col-sm-4 col-xs-12" onClick={this.itemClicked}>
           <div className="headline-card tracked loaded" style={{height: 600}}>
             <a className="image-wrap" href="#">
                 <img className="image image-small" src={image_url} />
             </a>

            

             <div className="news-source">
               <div className="source-section first-section">
                 <a href="#">@{topic.name}</a>
               </div>
               <div className="source-section first-section first-lower-section subscribe">
                 <button type="button" className="btn btn-success btn-xs btn-subscribe"><i className="fa fa-newspaper-o fa-lg"></i> BOOKMARK</button>
                 <span>222,980</span>
               </div>
               <div className="news-tags-reveal">
                 <span>254 views</span>
               </div>
             </div>

             <div className="body">
               <h3>
                 <a href="">{title}</a>
               </h3>
               <div className="news-info">
                 <span className="time"><i className="fa fa-user fa-1x"></i> 19 hours ago</span>
                 <span className="time"><i className="fa fa-calendar fa-1x"></i> 19 hours ago</span>
                 <span className="time"><i className="fa fa-clock-o fa-1x"></i> 1 min read</span>
               </div>
             </div>

             <div className="text-preview">
               <div>
                 {ReactHtmlParser(htmlText)}

               </div>
             </div>

             <div className="news-tags">
              
               <a className="news-tag" href="#">By {user.name}</a>
             </div>

             <div className="news-actions" role="group" aria-label="">
               <a className="news-action" href="#"><i className="fa fa-share fa-lg"></i> 102</a>
               <a className="news-action" href="#"><i className="fa fa-heart-o fa-lg"></i> 204</a>
               <a className="news-action" href="#"><i className="fa fa-comments fa-lg"></i> 10</a>
               <a className="news-action" href="#"><i className="fa fa-ellipsis-h fa-lg"></i></a>
             </div>

           </div>
         </div>

   )
 }
}
export default connect()(ArticleView)
