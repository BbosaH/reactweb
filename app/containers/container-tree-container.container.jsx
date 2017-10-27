/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-17T17:21:13+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: container-tree-container.container.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-17T19:25:53+03:00
 */
 import React from 'react';
 import {Treebeard} from 'react-treebeard';
 import {connect} from 'react-redux';
 import {
  
  showArticlesAction,
  createArticleAction,
  filterMyArticlesAction,
  showVideoCoursesAction,
  createVideoAction,

} from 'Actions'



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
         }else if(/^Create Video course$/i.test(node.name)){
           dispatch(createVideoAction())
         }else if(/^View Video courses$/i.test(node.name)){
            dispatch(showVideoCoursesAction());
         }else if(/^My videos$/i.test(node.name)){

         }

     }
     render(){
       const {dispatch,data,data2}=this.props;
         return (
           <div>
             <Treebeard
                 data={data}
                 onToggle={this.onToggle}
             />
             <Treebeard
                 data={data2}
                 onToggle={this.onToggle}
             />
           </div>
         );
     }
 }

 export default connect(
   (state)=>{
     const {treeReducer}=state;
     const {data,data2}=treeReducer;
     return{
       data,
       data2
     }
   }
 )(TreeContainer)
