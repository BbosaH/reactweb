/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-14T12:48:17+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: component-display-message.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-14T12:52:06+03:00
 */
 import React,{Component} from 'react'
 
const DisplayMessage = (props)=>{
  return(

    <div>
      <h4>{props.message}</h4>
    </div>

  )
}

export default DisplayMessage;
