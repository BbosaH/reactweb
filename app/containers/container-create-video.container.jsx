import React,{Component} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './../styles/comment-box-style.css';
import firebase , {firebaseRef} from 'FirebaseIndex';
import {
	updateVideoTopicsAction,
	selectVideoTopicAction,
	changeVideoProgressAction,
	trackUploadStartAction,
	showUploadSuccessAction,
	setUploadErrorAction
} from 'Actions';
import FileUploader from 'react-firebase-file-uploader';

class CreateVideos extends Component{
    
	componentWillMount() {
		const {dispatch}=this.props;
		dispatch(updateVideoTopicsAction())
	}
	handleSelectChange=(val)=>{
		const {dispatch}=this.props;
		dispatch(selectVideoTopicAction(val.value));
	}
	
  	handleUploadStart = (isUploading,progress) => {
  		const {dispatch}=this.props;
  		const params = {isUploading,progress}
  		dispatch(trackUploadStartAction(params))
  		
  	}
  	handleProgress = (progress) => {
  		const {dispatch}=this.props;
  		dispatch(changeVideoProgressAction(progress));
  		
  	}
  	handleUploadError = (error) => {
    	//this.setState({isUploading: false});
    	dispatch(setUploadErrorAction());
    	console.error(error);
  	}
  	handleUploadSuccess = (filename) => {
  		const {dispatch} = this.props;
  		dispatch(showUploadSuccessAction(filename));
    	//this.setState({avatar: filename, progress: 100, isUploading: false});
    	
  	}
 
	render(){

		const {dispatch,topics,progress,isUploading,filename}=this.props;
		const select_topics = topics.map((topic)=>{
            return { value : topic.id , label : topic.name}
        })

		return(

			<div>
				<h3>Select video topic</h3>
				<Select 
	              name="form-field-name"
	              options={select_topics}
	              onChange={this.handleSelectChange}
	             />
	             <br/>
	             <h3>Video Title</h3>
	             <input type="text" className="form-control" name="videoTitle" id="videoTitle"/>
	             <br/>
	              <div className="row">
                    <label  className="col-sm-2 control-label">Upload Video</label>
                    <div className="col-sm-10">                    
                        <div className="input-group">
                          <div className="input-group-addon">
                          		<label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, pointer: 'cursor'}}>
							    Upload video
							    <FileUploader
							      hidden
							      accept="video/*"
							      storageRef={firebase.storage().ref('videos')}
							      onUploadStart={this.handleUploadStart}
							      onUploadError={this.handleUploadError}
							      onUploadSuccess={this.handleUploadSuccess}
							      onProgress={this.handleProgress}
							    />
							  </label>
                          </div>
                          <input type="text" className="form-control" name="uploadMedia" id="uploadMedia"/>
                        </div>
                    </div>
                 </div> 
                 <br/>
                 <label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, pointer: 'cursor'}}>
				    Uplad video
				    <FileUploader
				      hidden
				      accept="videos/*"
				      storageRef={firebase.storage().ref('videos')}
				      onUploadStart={this.handleUploadStart}
				      onUploadError={this.handleUploadError}
				      onUploadSuccess={this.handleUploadSuccess}
				      onProgress={this.handleProgress}
				    />
				  </label>
			</div>

		)

	}
}
export default connect(
	(state)=>{
		const {createVideoReducer}=state;
		const {topics,progress,isUploading,filename} = createVideoReducer;
		return{
			topics,
			progress,
			isUploading,
			filename,
			video_url
		}
	}
)(CreateVideos)