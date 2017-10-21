import firebase,{firebaseRef} from 'FirebaseIndex'
import {TOPIC_ARTICLES_UPDATED} from 'Settings'
import {constructArrayFromFirebaseArray} from 'Utility';
export const fetchTopicArticlesAction=(topic_id)=>{
    console.log("The topic id -->",topic_id);
    return(dispatch)=>{
        const topicArticleRef =firebaseRef.child('articles');
        topicArticleRef.orderByChild("topic").equalTo(topic_id).on('value',(snapshot)=>{
            console.log("The tpic articles-->",topic_articles);
            var topic_articles = constructArrayFromFirebaseArray(snapshot.val());
           
            dispatch({
              type: TOPIC_ARTICLES_UPDATED,
              payload: topic_articles
            })
            //console.log("The Requests-->",invitation_requests);
        },(err)=>{
   
        })

    }

}