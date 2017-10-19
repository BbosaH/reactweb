/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-17T17:13:35+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: container-create-article.container.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-18T07:28:02+03:00
 */
 import React,{Component,PropTypes} from 'react'
 import {connect} from 'react-redux'

 import 'medium-editor/dist/css/medium-editor.css'
 import 'medium-editor/dist/css/themes/default.css'
 import ImagesUploader from 'react-images-uploader';
 import 'react-images-uploader/styles.css';
 import 'react-images-uploader/font.css';

 import Editor from 'react-medium-editor';
 import RichTextEditor from 'react-rte';
 import {
  changeArticleTextAction,
  changeArticleTitleAction,
  submitArticleAction,
  changeArticleImageUrlAction
} from 'Actions'
import {API_URL,ARTICLE_IMAGE_URL} from 'Settings'
 

 class CreateArticle extends Component{
   

  

  handleBodyChange=(body_text,medium)=>{
     const {dispatch}=this.props
     dispatch(changeArticleTextAction(body_text));
    
  };

  handleTitleChange=()=>{
    const {dispatch}=this.props
    dispatch(changeArticleTitleAction(this.refs.title.value));
   
  };

  submitArticle=()=>{
    const {dispatch,title,body_text,
      user,image_url,date_of_creation}=this.props;
    console.log("The to bes sub props ===>",this.props)
    const params ={
      title,
      body_text,
      user,
      image_url,
      date_of_creation: new Date().getTime()
    }
    dispatch(submitArticleAction(params));
   
  };


  render(){

    const {dispatch,title,body_text,user,image_url,date_of_creation}=this.props

    console.log("The props ===>",this.props)
   

    return(
     
      <div className="app">
        
        <h3>Write Article</h3>
        
        <input id="article_title" value={title} ref='title' name="article_title" type="text" placeholder="Title" 
        className="form-control input-md" onChange={this.handleTitleChange}/>
        <br/>
        <Editor
          tag="pre"
          style={{minHeight:200}}
          text={body_text}
          onChange={this.handleBodyChange}
          options={{toolbar: {buttons: ['bold', 'italic', 'underline']}}}
        />
        <div className="row">
        <div className="col-sm-6">
            <ImagesUploader
                    url={ARTICLE_IMAGE_URL}
                    optimisticPreviews
                    multiple={false}
                    onLoadEnd={(err) => {
                        if (err.response.filename) {
                            console.log(err.response);
                            dispatch(changeArticleImageUrlAction(err.response.filename))
                        }
                    }}
                    label="Upload a picture"
                    />
          </div>
          <div className="col-sm-6">
              <button className="btn btn-success"  onClick={this.submitArticle}>Submit Article</button>    
          </div>   
          </div>
      </div>
    
    )
  }



 


 }
 export default connect(
   (state)=>{
      const {createArticleReducer,login}=state;
     
      const {body_text,title,image_url,date_of_creation}=createArticleReducer;
      const {user}=login;
      return {
        body_text,
        title ,
        user,
        image_url,
        date_of_creation,
        
      }
   }
 )(CreateArticle) ;
