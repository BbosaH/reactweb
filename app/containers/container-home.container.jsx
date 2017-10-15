/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-14T13:13:54+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: container-home.container.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-14T19:05:59+03:00
 */
import React,{Component} from 'react'

class HomeContainer extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <button className="btn btn-primary" style={{backgroundColor:'#000000'}}>Share your knowledge</button>
        <button className="btn btn-success">Self Development</button>
        <button className="btn btn-danger">Profile</button>
        <button className="btn btn-primary">settings</button>
        <button className="btn btn-dark">Knowlege market</button>
        <button className="btn btn-warning">yo</button>
      </div>
    )
  }
}

export default HomeContainer;
