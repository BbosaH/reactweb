/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-13T23:31:58+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: index.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-14T09:26:34+03:00
 */
import firebase from 'firebase'

try{

  const config = {
      apiKey: "AIzaSyBIx9juMirkkBQFqM03mvtF5D58TbW1mS4",
      authDomain: "reactweb-51a39.firebaseapp.com",
      databaseURL: "https://reactweb-51a39.firebaseio.com",
      projectId: "reactweb-51a39",
      storageBucket: "reactweb-51a39.appspot.com",
      messagingSenderId: "75170934272"
  };
  
  firebase.initializeApp(config);

}catch(e){

}

export const firebaseRef = firebase.database().ref()
export default firebase
