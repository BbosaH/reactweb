import React from 'react';
import {formatDate} from 'Utility';
import userImg from './../img/user.png'
const DisplayComment =(props)=>{
    const {user,text,date_of_creation}=props
    return(

        <li className="media">
        <a className="pull-left" href="#">
          <img className="media-object img-circle" src={userImg} alt="profile"/>
        </a>
        <div className="media-body">
          <div className="well well-lg">
              <h4 className="media-heading text-uppercase reviews">{user.name} </h4>
              <ul className="media-date text-uppercase reviews list-inline">
                <li className="dd">{formatDate(date_of_creation)}</li>
                {/* <li className="mm">09</li>
                <li className="aaaa">2014</li> */}
              </ul>
              <p className="media-comment">
                {text}
              </p>
              {/* <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt"></span> Reply</a>
              <a className="btn btn-warning btn-circle text-uppercase" data-toggle="collapse" href="#replyOne"><span className="glyphicon glyphicon-comment"></span> 2 comments</a> */}
          </div>              
        </div>
        {/* <div className="collapse" id="replyOne">
            <ul className="media-list">
                <li className="media media-replied">
                    <a className="pull-left" href="#">
                      <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/ManikRathee/128.jpg" alt="profile"/>
                    </a>
                    <div className="media-body">
                      <div className="well well-lg">
                          <h4 className="media-heading text-uppercase reviews"><span className="glyphicon glyphicon-share-alt"></span> The Hipster</h4>
                          <ul className="media-date text-uppercase reviews list-inline">
                            <li className="dd">22</li>
                            <li className="mm">09</li>
                            <li className="aaaa">2014</li>
                          </ul>
                          <p className="media-comment">
                            Nice job Maria.
                          </p>
                          <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt"></span> Reply</a>
                      </div>              
                    </div>
                </li>
                <li className="media media-replied" id="replied">
                    <a className="pull-left" href="#">
                      <img className="media-object img-circle" src="https://pbs.twimg.com/profile_images/442656111636668417/Q_9oP8iZ.jpeg" alt="profile"/>
                    </a>
                    <div className="media-body">
                      <div className="well well-lg">
                          <h4 className="media-heading text-uppercase reviews"><span className="glyphicon glyphicon-share-alt"></span> Mary</h4>
                          <ul className="media-date text-uppercase reviews list-inline">
                            <li className="dd">22</li>
                            <li className="mm">09</li>
                            <li className="aaaa">2014</li>
                          </ul>
                          <p className="media-comment">
                            Thank you Guys!
                          </p>
                          <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt"></span> Reply</a>
                      </div>              
                    </div>
                </li>
            </ul>  
        </div> */}
</li>

    )

}
export default DisplayComment;