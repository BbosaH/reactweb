/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-16T02:10:12+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: router.js
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-16T11:47:16+03:00
 */
 var sendInvitationMail = require('./mail.js');

 const router = (app) => {
   app.post('/send_invitation',(req, res, next)=>{
      console.log("yellow email",req.body)
      var {email} = req.body
      console.log("blue email",email)
    //sendInvitationMail("bbosa.henry1@gmail.com")
   });
 };

 module.exports = router;
