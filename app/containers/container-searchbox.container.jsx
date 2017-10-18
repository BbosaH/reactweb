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
 class SearchBox extends Component{
  render(){
    return(
      <div className="container">
        	<div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <div id="imaginary_container">
                        <div className="input-group stylish-input-group">
                            <input type="text" className="form-control"  placeholder="Search" />
                            <span className="input-group-addon">
                                <button type="submit">
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
 export default connect()(SearchBox)
