/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-14T13:13:54+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: container-home.container.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-15T12:01:49+03:00
 */
import React,{Component} from 'react'

import InvitationRequestList from 'InvitationRequestList'
import TileContainer from 'TileContainer'


class HomeContainer extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="container">



          <div className="row">
          
            <TileContainer/>
            <InvitationRequestList/>

          </div>

      </div>
    )
  }
}

export default HomeContainer;
