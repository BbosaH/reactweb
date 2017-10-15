/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-15T11:45:41+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: container-tiledashboard.container.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-15T11:54:09+03:00
 */
 
 import React,{Component} from 'react'
 import './../styles/home-style.css';
 import {connect} from 'react-redux';

 class TileContainer extends Component {
   constructor(props){
     super(props)
   }
   render(){
     return(



               <div className="col-sm-6">
                   <h3 className="text-center">Dashboard</h3>
                   <section className="color-pattern-5">
                    <div>
                        <button className="button button-5 button-5a icon-cart"><i className="fa fa-shopping-cart"></i><span>Share your Knowledge</span></button>
                        <button className="button button-5 button-5a icon-remove"><i className="fa fa-cog"></i><span>Self Development</span></button>
                        <button className="button button-5 button-5a icon-cog"><i className="fa fa-cog"></i><span>Settings</span></button>
                    </div>
                    <div>
                        <button className="button button-5 button-5b icon-cart"><i className="fa fa-shopping-cart"></i><span>Profile</span></button>
                        <button className="button button-5 button-5b icon-remove"><i className="fa fa-trash"></i><span> Knowledge Market</span></button>
                        <button className="button button-5 button-5b icon-cog"><i className="fa fa-cog"></i><span>About us</span></button>
                    </div>
                 </section>
              </div>


     )
   }
 }

 export default connect(


 )(TileContainer);
