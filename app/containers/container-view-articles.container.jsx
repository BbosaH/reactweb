/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-17T17:09:50+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: conitainer-view-articles.container.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-18T06:43:05+03:00
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import './../styles/view-articles.css'
class ViewArticles extends Component{
 render(){
   return(
        <div className="row">
         <div className=" col-sm-4 col-xs-12">
           <div className="headline-card tracked loaded" style={{height: 600}}>
             <a className="image-wrap" href="#">
                 <img className="image image-small" src="https://assets.entrepreneur.com/content/16x9/822/1390609103-seed-doesnt-make-series-startups-never-reach-second-funding-round.jpg" />
             </a>

             <div className="not-interested">
               <a className="btn btn-default close" href="#">
                 <span>Not Interested </span><i className="fa fa-close"></i></a>
             </div>

             <div className="news-source">
               <div className="source-section first-section">
                 <a href="#">@Entrepreneur</a>
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
                 <a href="">5 Essentials for Maximizing Results From Seed Capital</a>
               </h3>
               <div className="news-info">
                 <span className="time"><i className="fa fa-user fa-1x"></i> 19 hours ago</span>
                 <span className="time"><i className="fa fa-calendar fa-1x"></i> 19 hours ago</span>
                 <span className="time"><i className="fa fa-clock-o fa-1x"></i> 1 min read</span>
               </div>
             </div>

             <div className="text-preview">
               <p>
                 <a href="#">One of my favorite consulting services is advising founders on how to build their startups. I work with a founder who knows what problem he wants his startup to solve and asked for advice on how to....</a>
               </p>
             </div>

             <div className="news-tags">
               <a className="news-tag" href="#">#Small Business</a>
               <a className="news-tag" href="#">#Investing</a>
               <a className="news-tag" href="#">#Business</a>
             </div>

             <div className="news-actions" role="group" aria-label="">
               <a className="news-action" href="#"><i className="fa fa-share fa-lg"></i> 102</a>
               <a className="news-action" href="#"><i className="fa fa-heart-o fa-lg"></i> 204</a>
               <a className="news-action" href="#"><i className="fa fa-comments fa-lg"></i> 10</a>
               <a className="news-action" href="#"><i className="fa fa-ellipsis-h fa-lg"></i></a>
             </div>

           </div>
         </div>

         <div className=" col-sm-4 col-xs-12">
           <div className="headline-card tracked loaded" style={{height: 600}}>
             <img className="image image-small" src="https://assets.entrepreneur.com/content/16x9/822/1390609103-seed-doesnt-make-series-startups-never-reach-second-funding-round.jpg" />
             <a className="gradient gradient-small" href="" id="header3"></a>

             <div className="not-interested">
               <a className="btn btn-default close" href="#">
                 <span>Not Interested </span><i className="fa fa-close"></i></a>
             </div>

             <div className="news-source">
               <div className="source-section first-section">
                 <a href="#">@Entrepreneur</a>
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
                 <a href="">5 Essentials for Maximizing Results From Seed Capital</a>
               </h3>
               <div className="news-info">
                 <span className="time"><i className="fa fa-calendar fa-1x"></i> 19 hours ago</span>
                 <span className="time"><i className="fa fa-clock-o fa-1x"></i> 1 min read</span>
               </div>
             </div>

             <div className="text-preview">
               <p>
                 <a href="#">One of my favorite consulting services is advising founders on how to build their startups. I work with a founder who knows what problem he wants his startup to solve and asked for advice on how to....</a>
               </p>
             </div>

             <div className="news-tags">
               <a className="btn btn-link btn-xs btn-news-tag" href="#">#Small Business</a>
               <a className="btn btn-link btn-xs btn-news-tag" href="#">#Investing</a>
               <a className="btn btn-link btn-xs btn-news-tag" href="#">#Business</a>
             </div>

             <div className="news-actions" role="group" aria-label="">
               <a className="btn btn-link btn-xs btn-action" href="#"><i className="fa fa-share-alt fa-lg"></i> 102</a>
               <a className="btn btn-link btn-xs btn-action" href="#"><i className="fa fa-heart-o fa-lg"></i> 204</a>
               <a className="btn btn-link btn-xs btn-action" href="#"><i className="fa fa-comments fa-lg"></i> 10</a>
               <a className="btn btn-link btn-xs btn-action" href="#"><i className="fa fa-ellipsis-h fa-lg"></i></a>
             </div>

           </div>
         </div>

         <div className=" col-sm-4 col-xs-12">
           <div className="headline-card tracked loaded" style={{height: 600}}>
             <img className="image image-small" src="https://assets.entrepreneur.com/content/16x9/822/1390609103-seed-doesnt-make-series-startups-never-reach-second-funding-round.jpg" />
             <a className="gradient gradient-small" href="" id="header3"></a>

             <div className="not-interested">
               <a className="btn btn-default close" href="#">
                 <span>Not Interested </span><i className="fa fa-close"></i></a>
             </div>

             <div className="news-source">
               <div className="source-section first-section">
                 <a href="#">@Entrepreneur</a>
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
                 <a href="">5 Essentials for Maximizing Results From Seed Capital</a>
               </h3>
               <div className="news-info">
                 <span className="time"><i className="fa fa-calendar fa-1x"></i> 19 hours ago</span>
                 <span className="time"><i className="fa fa-clock-o fa-1x"></i> 1 min read</span>
               </div>
             </div>

             <div className="text-preview">
               <p>
                 <a href="#">One of my favorite consulting services is advising founders on how to build their startups. I work with a founder who knows what problem he wants his startup to solve and asked for advice on how to....</a>
               </p>
             </div>

             <div className="news-tags">
               <a className="btn btn-link btn-xs btn-news-tag" href="#">#Small Business</a>
               <a className="btn btn-link btn-xs btn-news-tag" href="#">#Investing</a>
               <a className="btn btn-link btn-xs btn-news-tag" href="#">#Business</a>
             </div>

             <div className="news-actions" role="group" aria-label="">
               <a className="btn btn-link btn-xs btn-action" href="#"><i className="fa fa-share-alt fa-lg"></i> 102</a>
               <a className="btn btn-link btn-xs btn-action" href="#"><i className="fa fa-heart-o fa-lg"></i> 204</a>
               <a className="btn btn-link btn-xs btn-action" href="#"><i className="fa fa-comments fa-lg"></i> 10</a>
               <a className="btn btn-link btn-xs btn-action" href="#"><i className="fa fa-ellipsis-h fa-lg"></i></a>
             </div>

           </div>
         </div>

         <div className=" col-sm-4 col-xs-12">
           <div className="headline-card tracked loaded" style={{height: 600}}>
             <a className="image-wrap" href="#">
                 <img className="image image-small" src="https://assets.entrepreneur.com/content/16x9/822/1390609103-seed-doesnt-make-series-startups-never-reach-second-funding-round.jpg" />
             </a>

             <div className="not-interested">
               <a className="btn btn-default close" href="#">
                 <span>Not Interested </span><i className="fa fa-close"></i></a>
             </div>

             <div className="news-source">
               <div className="source-section first-section">
                 <a href="#">@Entrepreneur</a>
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
                 <a href="">5 Essentials for Maximizing Results From Seed Capital</a>
               </h3>
               <div className="news-info">
                 <span className="time"><i className="fa fa-user fa-1x"></i> 19 hours ago</span>
                 <span className="time"><i className="fa fa-calendar fa-1x"></i> 19 hours ago</span>
                 <span className="time"><i className="fa fa-clock-o fa-1x"></i> 1 min read</span>
               </div>
             </div>

             <div className="text-preview">
               <p>
                 <a href="#">One of my favorite consulting services is advising founders on how to build their startups. I work with a founder who knows what problem he wants his startup to solve and asked for advice on how to....</a>
               </p>
             </div>

             <div className="news-tags">
               <a className="news-tag" href="#">#Small Business</a>
               <a className="news-tag" href="#">#Investing</a>
               <a className="news-tag" href="#">#Business</a>
             </div>

             <div className="news-actions" role="group" aria-label="">
               <a className="news-action" href="#"><i className="fa fa-share fa-lg"></i> 102</a>
               <a className="news-action" href="#"><i className="fa fa-heart-o fa-lg"></i> 204</a>
               <a className="news-action" href="#"><i className="fa fa-comments fa-lg"></i> 10</a>
               <a className="news-action" href="#"><i className="fa fa-ellipsis-h fa-lg"></i></a>
             </div>

           </div>
         </div>

         <div className=" col-sm-4 col-xs-12">
           <div className="headline-card tracked loaded" style={{height: 600}}>
             <img className="image image-small" src="https://assets.entrepreneur.com/content/16x9/822/1390609103-seed-doesnt-make-series-startups-never-reach-second-funding-round.jpg" />
             <a className="gradient gradient-small" href="" id="header3"></a>

             <div className="not-interested">
               <a className="btn btn-default close" href="#">
                 <span>Not Interested </span><i className="fa fa-close"></i></a>
             </div>

             <div className="news-source">
               <div className="source-section first-section">
                 <a href="#">@Entrepreneur</a>
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
                 <a href="">5 Essentials for Maximizing Results From Seed Capital</a>
               </h3>
               <div className="news-info">
                 <span className="time"><i className="fa fa-calendar fa-1x"></i> 19 hours ago</span>
                 <span className="time"><i className="fa fa-clock-o fa-1x"></i> 1 min read</span>
               </div>
             </div>

             <div className="text-preview">
               <p>
                 <a href="#">One of my favorite consulting services is advising founders on how to build their startups. I work with a founder who knows what problem he wants his startup to solve and asked for advice on how to....</a>
               </p>
             </div>

             <div className="news-tags">
               <a className="btn btn-link btn-xs btn-news-tag" href="#">#Small Business</a>
               <a className="btn btn-link btn-xs btn-news-tag" href="#">#Investing</a>
               <a className="btn btn-link btn-xs btn-news-tag" href="#">#Business</a>
             </div>

             <div className="news-actions" role="group" aria-label="">
               <a className="btn btn-link btn-xs btn-action" href="#"><i className="fa fa-share-alt fa-lg"></i> 102</a>
               <a className="btn btn-link btn-xs btn-action" href="#"><i className="fa fa-heart-o fa-lg"></i> 204</a>
               <a className="btn btn-link btn-xs btn-action" href="#"><i className="fa fa-comments fa-lg"></i> 10</a>
               <a className="btn btn-link btn-xs btn-action" href="#"><i className="fa fa-ellipsis-h fa-lg"></i></a>
             </div>

           </div>
         </div>

         <div className=" col-sm-4 col-xs-12">
           <div className="headline-card tracked loaded" style={{height: 600}}>
             <img className="image image-small" src="https://assets.entrepreneur.com/content/16x9/822/1390609103-seed-doesnt-make-series-startups-never-reach-second-funding-round.jpg" />
             <a className="gradient gradient-small" href="" id="header3"></a>

             <div className="not-interested">
               <a className="btn btn-default close" href="#">
                 <span>Not Interested </span><i className="fa fa-close"></i></a>
             </div>

             <div className="news-source">
               <div className="source-section first-section">
                 <a href="#">@Entrepreneur</a>
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
                 <a href="">5 Essentials for Maximizing Results From Seed Capital</a>
               </h3>
               <div className="news-info">
                 <span className="time"><i className="fa fa-calendar fa-1x"></i> 19 hours ago</span>
                 <span className="time"><i className="fa fa-clock-o fa-1x"></i> 1 min read</span>
               </div>
             </div>

             <div className="text-preview">
               <p>
                 <a href="#">One of my favorite consulting services is advising founders on how to build their startups. I work with a founder who knows what problem he wants his startup to solve and asked for advice on how to....</a>
               </p>
             </div>

             <div className="news-tags">
               <a className="btn btn-link btn-xs btn-news-tag" href="#">#Small Business</a>
               <a className="btn btn-link btn-xs btn-news-tag" href="#">#Investing</a>
               <a className="btn btn-link btn-xs btn-news-tag" href="#">#Business</a>
             </div>

             <div className="news-actions" role="group" aria-label="">
               <a className="btn btn-link btn-xs btn-action" href="#"><i className="fa fa-share-alt fa-lg"></i> 102</a>
               <a className="btn btn-link btn-xs btn-action" href="#"><i className="fa fa-heart-o fa-lg"></i> 204</a>
               <a className="btn btn-link btn-xs btn-action" href="#"><i className="fa fa-comments fa-lg"></i> 10</a>
               <a className="btn btn-link btn-xs btn-action" href="#"><i className="fa fa-ellipsis-h fa-lg"></i></a>
             </div>

           </div>
         </div>
       </div>



   )
 }
}
export default connect()(ViewArticles)
