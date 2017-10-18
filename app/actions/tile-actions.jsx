/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-16T16:20:29+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: tile-actions.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-16T17:08:28+03:00
 */
 import firebase,{firebaseRef} from 'FirebaseIndex'

 import{
   NAVIGATED_TOSHAREDKNOWLEDGE
 } from 'Settings'

 import {constructArrayFromFirebaseArray} from 'Utility'

 export const navigatetoShareKnowlegeOptionsAction =()=>{
   return {
     type : NAVIGATED_TOSHAREDKNOWLEDGE
   }
 }
