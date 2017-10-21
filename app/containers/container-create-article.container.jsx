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
  changeArticleImageUrlAction,
  updateTopicsAction,
  selectTopicAction,
  articleMessageChangedAction
} from 'Actions'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {API_URL,ARTICLE_IMAGE_URL} from 'Settings'
import DisplayMessage from "DisplayMessage"

 

 class CreateArticle extends Component{
   
  componentWillMount(){
    const {dispatch}=this.props
    dispatch(updateTopicsAction());
  }
  

  handleBodyChange=(body_text,medium)=>{
     const {dispatch}=this.props
     dispatch(changeArticleTextAction(body_text));
    
  };

  handleTitleChange=()=>{
    const {dispatch}=this.props
    dispatch(changeArticleTitleAction(this.refs.title.value));
   
  };
  handleSelectChange=(val)=>{
    console.log(val.value);
    const {dispatch}=this.props;
    dispatch(selectTopicAction(val.value));
   
  };

  submitArticle=()=>{
    
    const {dispatch,title,body_text,user,image_url,date_of_creation,topic}=this.props;
    const params ={title,body_text,user,image_url,topic,date_of_creation:new Date().getTime()}
    dispatch(submitArticleAction(params));
  
  };

   


  render(){

    const {dispatch,title,body_text,user,image_url,topics,
      date_of_creation,article_message}=this.props

    const select_topics = topics.map((topic)=>{
            return { value : topic.id , label : topic.name}
    })

    console.log("The props ===>",this.props)
   

    return(
     
      <div className="app">
        
        <h3>Write Article</h3>
        
        <input id="article_title" value={title} ref='title' name="article_title" type="text" placeholder="Title" 
        className="form-control input-md" onChange={this.handleTitleChange}/>
        <br/>
        
            
              
            <Select 
              name="form-field-name"
              options={select_topics}
              onChange={this.handleSelectChange}
             />
            
          
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
          <DisplayMessage message={article_message}/>
      </div>
    
    )
  }



 


 }
 export default connect(
   (state)=>{
      const {createArticleReducer,login}=state;
     
      const {body_text,title,image_url,date_of_creation,topics,topic,article_message}=createArticleReducer;
      const {user}=login;
      return {
        body_text,
        title ,
        user,
        image_url,
        date_of_creation,
        topics,
        topic,
        article_message
        
      }
   }
 )(CreateArticle) ;
