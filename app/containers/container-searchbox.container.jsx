/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-18T00:12:00+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: container-searchbox.container.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-18T06:37:59+03:00
 */
 import React,{Component} from 'react'
 import {connect} from 'react-redux'
 import {changeSearchTextAction} from 'Actions'
 class SearchBox extends Component{
  
  changeSearchText=()=>{
      const {dispatch,full_articles}=this.props;
      dispatch(changeSearchTextAction(this.refs.search_text.value,full_articles))
      }
  render(){
    return(
      <div className="container">
        	<div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <div id="imaginary_container">
                        <div className="input-group stylish-input-group">
                            <input type="text" ref="search_text" className="form-control" onChange={this.changeSearchText}  placeholder="Search" />
                            <span className="input-group-addon">
                                <button type="submit" onClick={this.changeSearchText}>
                                    <span className="glyphicon glyphicon-search"></span>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
        	</div>
    </div>
    )
  }
 }
 export default connect(
     (state)=>{
         const{articlesReducer}=state;
         const {full_articles}=articlesReducer
         return{
            full_articles
         }
     }
 )(SearchBox)

