/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-14T13:38:47+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: utility.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-15T06:41:11+03:00
 */

 export const validateReg = (text,reg_exp) => {
       return reg_exp.test(text);
 };

 export const constructArrayFromFirebaseArray=(fb_array)=>{
   const keys = Object.keys(fb_array);
   var jvArray = keys.map((key)=>{
       return {
         ...fb_array[key],
         id:key
       };
   })
   return jvArray;
 }
 Array.prototype.Add=function(element){
     this.push(element);
 };
