/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-16T15:59:02+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: container-share-knowledge-options.container.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-18T07:31:04+03:00
 */


import React,{Component} from 'react';
import {connect} from 'react-redux';
import TreeContainer from 'TreeContainer';
import CreateArticle from 'CreateArticle';
import ViewArticles from  'ViewArticles';
import SearchBox from 'SearchBox'

class ShareKnowlegeOptions extends Component{


  render(){
    const {dispatch,redirect_show_articles,redirect_create_article}=this.props
    return(


        <div className="row">
           <SearchBox/>
          <div className="col-sm-2">

           <TreeContainer/>


          </div>
          <div className="col-sm-10">
              {(redirect_show_articles)?
                  <ViewArticles/>
                : (redirect_create_article)?
                    <CreateArticle/> :   <ViewArticles/>
              }

          </div>
        </div>






    )
  }


}

export default connect(
  (state)=>{
    const {treeReducer}=state;
    const{redirect_show_articles,redirect_create_article}=treeReducer;
    return{
      redirect_show_articles,
      redirect_create_article
    }
  }
)(ShareKnowlegeOptions)
