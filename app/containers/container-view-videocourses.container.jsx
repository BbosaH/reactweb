import React,{Component} from 'react';
import {connect} from 'react-redux';
import './../styles/view-videos.css';

class ViewVideoCourses extends Component{


	render(){
		
		return(

			<div className="container">

				<div>
				    <h5>Available Courses</h5>
				    <hr/>
				</div>

				<ul className="list-unstyled video-list-thumbs row">
					<li className="col-lg-3 col-sm-4 col-xs-6">
						<a href="#" title="Claudio Bravo, antes su debut con el Barça en la Liga">
							<img src="http://i.ytimg.com/vi/ZKOtE9DOwGE/mqdefault.jpg" alt="Barca" className="img-responsive" style={{height:130}} />
							<h2>Claudio Bravo, antes su debut con el Barça en la Liga</h2>
							<span className="glyphicon glyphicon-play-circle"></span>
							<span className="duration">03:15</span>
						</a>
					</li>
					<li className="col-lg-3 col-sm-4 col-xs-6">
						<a href="#" title="Claudio Bravo, antes su debut con el Barça en la Liga">
							<img src="http://i.ytimg.com/vi/ZKOtE9DOwGE/mqdefault.jpg" alt="Barca" className="img-responsive" style={{height:130}}/>
							<h2>A React Native Complete Course</h2>
							<span className="glyphicon glyphicon-play-circle"></span>
							<span className="duration">03:15</span>
						</a>
					</li>
					<li className="col-lg-3 col-sm-4 col-xs-6">
						<a href="#" title="Claudio Bravo, antes su debut con el Barça en la Liga">
							<img src="http://i.ytimg.com/vi/ZKOtE9DOwGE/mqdefault.jpg" alt="Barca" className="img-responsive" style={{height:130}} />
							<h2>Claudio Bravo, antes su debut con el Barça en la Liga</h2>
							<span className="glyphicon glyphicon-play-circle"></span>
							<span className="duration">03:15</span>
						</a>
					</li>
					<li className="col-lg-3 col-md-4 col-sm-4 col-xs-6">
						<a href="#" title="Claudio Bravo, antes su debut con el Barça en la Liga">
							<img src="http://i.ytimg.com/vi/ZKOtE9DOwGE/mqdefault.jpg" alt="Barca" className="img-responsive" style={{height:130}} />
							<h2>Claudio Bravo, antes su debut con el Barça en la Liga</h2>
							<span className="glyphicon glyphicon-play-circle"></span>
							<span className="duration">03:15</span>
						</a>
					</li>
				    <li className="col-lg-3 col-md-4 col-sm-4 col-xs-6">
						<a href="#" title="Claudio Bravo, antes su debut con el Barça en la Liga">
							<img src="http://i.ytimg.com/vi/ZKOtE9DOwGE/mqdefault.jpg" alt="Barca" className="img-responsive" style={{height:130}} />
							<h2>Claudio Bravo, antes su debut con el Barça en la Liga</h2>
							<span className="glyphicon glyphicon-play-circle"></span>
							<span className="duration">03:15</span>
						</a>
					</li>
				</ul>

			</div>


		)
	}

}
export default connect()(ViewVideoCourses);