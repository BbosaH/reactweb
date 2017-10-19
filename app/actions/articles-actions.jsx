import{
    ARTICLES_FETCHED
 } from 'Settings';
 import firebase,{firebaseRef} from 'FirebaseIndex'

 import {constructArrayFromFirebaseArray} from 'Utility'

 export const fetchArticlesAction=()=>{

    return(dispatch)=>{

    const userRef = firebaseRef.child('articles');
    userRef.on('value',(snapshot)=>{

         var articles = constructArrayFromFirebaseArray(snapshot.val());
         console.log("The articles",articles);
         dispatch({
           type: ARTICLES_FETCHED,
           payload:articles
         })
         //console.log("The Requests-->",invitation_requests);
     },(err)=>{

     })


    }

 }