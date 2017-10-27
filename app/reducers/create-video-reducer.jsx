import {
	UPDATE_VID_TOPICS,
	SELECT_VID_TOPIC_CHANGED,
	CHANGE_VIDEO_PROGRESS,
	TRACK_UPLOAD_START,
	SHOW_SUCCESS_STATE,
	SET_UPLOAD_ERROR

} from 'Settings';

const defaultState = {
	topics :[
	],
	topic :{

	},
	isUploading : false,
	progress : 0,
	video_url : '',
	filename : ''
}
export const createVideoReducer=(state=defaultState,action)=>{
	switch(action.type){
		case UPDATE_VID_TOPICS:

			return{

				...state,
				topics : action.payload
			}
		case SELECT_VID_TOPIC_CHANGED:
			return{
				...state,
				topic : state.topics.filter((topic)=>{
              		return topic.id===action.payload
		        }).reduce((acc,val)=>{
		        	
		              return{
		                ...acc,
		                ...val
		              }

		        },{})
			}
		case CHANGE_VIDEO_PROGRESS:
			return {
				...state,
				progress:action.payload
			}
		case TRACK_UPLOAD_START:
			return {
				...state,
				isUploading : action.isUploading,
				progress : action.progress,
				video_url : action.video_url,
				filename: action.filename
			}
		case SET_UPLOAD_ERROR:
		 	return{
		 		...state,
		 		isUploading:false
		 	}
		default:
			return state;
	}
}