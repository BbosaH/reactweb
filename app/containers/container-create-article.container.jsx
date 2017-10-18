/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-17T17:13:35+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: container-create-article.container.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-18T07:28:02+03:00
 */
 import React,{Component} from 'react'
 import {connect} from 'react-redux'

 import 'medium-editor/dist/css/medium-editor.css'
 import 'medium-editor/dist/css/themes/default.css'

 import Editor from 'react-medium-editor';
 import {changeArticleTextAction} from 'Actions'

 class CreateArticle extends Component{




   handleChange(text,medium) {

  }

  render(){

    const {dispatch,text}=this.props
    console.log("The props ===>",this.props)

    return(
      <div className="app">

        <h3>Create article</h3>
        <div>{text}</div>

        <h3>Editor #1 (&lt;pre&gt; tag)</h3>
        <Editor
          tag="pre"
          text={text}
          onChange={

            (text,medium)=>{

            dispatch(changeArticleTextAction(text))
            }}
          options={{toolbar: {buttons: ['bold', 'italic', 'underline']}}}
        />

      </div>
    )
  }

 }
 export default connect(
   (state)=>{
     const {createArticleReducer}=state;
     const {text}=createArticleReducer;
     return {
       text
     }
   }
 )(CreateArticle)
