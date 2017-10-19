/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-17T17:21:13+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: container-tree-container.container.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-17T19:25:53+03:00
 */
 import React from 'react';
 import {Treebeard} from 'react-treebeard';
 import {connect} from 'react-redux';
 import {showArticlesAction,createArticleAction,filterMyArticlesAction} from 'Actions'



 class TreeContainer extends React.Component {
     constructor(props){
         super(props);
         this.state = {};
         this.onToggle = this.onToggle.bind(this);
     }
     onToggle(node,toggled){
        const {dispatch}=this.props;
          console.log("The node ==> ",node)
          console.log("The toggled ==> ",toggled)
         if(this.state.cursor){
           this.state.cursor.active = false;
         }
         node.active = true;
         if(node.children){
           node.toggled = toggled;
         }
         this.setState({ cursor: node });
         if(/^Create Article$/i.test(node.name)){
           dispatch(createArticleAction())
         }else if(/^View Articles$/i.test(node.name)){
           dispatch(showArticlesAction())
         }else if(/^My Articles$/i.test(node.name)){
           dispatch(filterMyArticlesAction())
         }

     }
     render(){
       const {dispatch,data}=this.props;
         return (
             <Treebeard
                 data={data}
                 onToggle={this.onToggle}
             />
         );
     }
 }

 export default connect(
   (state)=>{
     const {treeReducer}=state;
     const {data}=treeReducer;
     return{
       data
     }
   }
 )(TreeContainer)
