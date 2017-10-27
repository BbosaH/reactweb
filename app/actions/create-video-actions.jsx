import firebase , {firebaseRef} from 'FirebaseIndex';
import {constructArrayFromFirebaseArray} from 'Utility';
import {
  UPDATE_VID_TOPICS,
  SELECT_VID_TOPIC_CHANGED,
  CHANGE_VIDEO_PROGRESS,
  TRACK_UPLOAD_START,
  SHOW_SUCCESS_STATE,
  SET_UPLOAD_ERROR
} from 'Settings';



export const updateVideoTopicsAction =()=>{
   return(dispatch)=>{
     const topicsRef = firebaseRef.child('topics');
     topicsRef.on('value',(snapshot)=>{

         var topics = constructArrayFromFirebaseArray(snapshot.val());
         
         
         dispatch({
          type : UPDATE_VID_TOPICS,
          payload:topics
         })
         //console.log("The Requests-->",invitation_requests);
     },(err)=>{

     })
     

   }
 }

export const selectVideoTopicAction =(topic_id)=>{
  return{
    type : SELECT_VID_TOPIC_CHANGED,
    payload:topic_id,
  }
}
export const changeVideoProgressAction =(progress)=>{
  return{
    type: CHANGE_VIDEO_PROGRESS,
    payload : progress
  }
}

export const trackUploadStartAction = ({isUploading,progress})=>{
  return{
    type : TRACK_UPLOAD_START,
    isUploading,
    progress
  }
}
export const showUploadSuccessAction =(filename)=>{

  return(dispatch)=>{

    firebase.storage().ref('videos').child(filename).getDownloadURL().then(
      (url) =>{
        dispatch({
          type: SHOW_SUCCESS_STATE,
          filename,
          progress: 100, 
          isUploading: false,
          video_url: url
        });
      } 
    );


  }
}
export const setUploadErrorAction =()=>{
  return {
    type: SET_UPLOAD_ERROR
  }
}