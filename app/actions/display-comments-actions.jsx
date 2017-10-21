import {ARTICLE_COMMENTS_UPDATED} from 'Settings'
import firebase,{firebaseRef} from 'FirebaseIndex'
import {constructArrayFromFirebaseArray} from 'Utility' 
export const fetchArticleComments=(article_id)=>{
    return(dispatch)=>{
        firebase.database().ref(`/articles/${article_id}/comments`)
        .on('value',(snapshot)=>{
            console.log("the comments are =>",snapshot.val())
            const article_comments =constructArrayFromFirebaseArray(snapshot.val());
            dispatch({
                type : ARTICLE_COMMENTS_UPDATED,
                payload : article_comments
            })
        },(err)=>{
            console.log(err);
        })
        


    }

}