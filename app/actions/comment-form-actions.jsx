import {
    COMMENT_VALUE_CHANGED
} from 'Settings';
import firebase,{firebaseRef} from 'FirebaseIndex'
import {setCommentsFlagAction} from 'Actions'

export const changeCommentValue=(comment_value)=>{
    return {
        type : COMMENT_VALUE_CHANGED,
        payload:comment_value
    }
}

export const submitCommentAction =(params)=>{
    return(dispatch)=>{
        const article_id = params.article_id;
        console.log("the article id is?",article_id)
    //     const articleRef =firebaseRef.child("articles");
    //     articleRef.orderByChild("").firebaseRef.child("articles").push({
    //     name  : 'React native',
    //     description : 'This is about reacts mobile platform',
    //     no_of_articles: 0
    //    })

       firebase.database().ref(`/articles/${article_id}/comments`)
       .push(
           { 
           text:params.comment_value,
           date_of_creation:params.date_of_creation, 
           user:params.user,
           article_id:params.article_id
          }).then(()=>{
              dispatch(setCommentsFlagAction());
          });
       


    }
}