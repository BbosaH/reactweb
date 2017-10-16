/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-15T17:56:53+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: mail.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-16T12:03:33+03:00
 */

var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

var ROOT_URL = process.env.NODE_ENV === 'production' ? 'http://localhost:3000'
: 'http://localhost:3000';
var from = '"bbosa henry" <bbosa.henry1@gmail.com>';


var transporter = nodemailer.createTransport({
  service : 'gmail',
  auth :{
    
      xoauth2 : xoauth2.createXOAuth2Generator({
        user :'bbosa.henry1@gmail.com',
        clientId :'75170934272-5onm3704reale40eigf8gmdtkh3c1t2b.apps.googleusercontent.com',
        clientSecret:'AE5t1evBveFR3oGUd9A--aeu',
        refreshToken:''
      })

  },


});


var sendInvitationMail=(email)=>{
  var html = "<div style='margin: 0; padding: 0; width: 100%; font-family: Trebuchet MS, sans-serif;'>" +
    "<div style='background-color: #f2f2f2; padding: 45px;'>" +
    "<div style='background-color: #ffffff; padding: 40px; text-align: center;'>" +
    "<h1 style='color: #5f5f5f; margin-bottom: 30px;'>Hi, " + email + "</h1>" +
    "<p style='color: #5f5f5f;'>Click the big button below to activate your account.</p>" +
    "<a href='" + ROOT_URL + "/reduxauth/verify-email/?email=" + email + "&token=" + 'token' + "' style='background-color: #288feb; color: #fff; padding: 14px; text-decoration: none; border-radius: 5px; margin-top: 20px; display: inline-block;'>Activate Account</a>" +
    "</div> <h3 style='color: #5f5f5f; text-align: center; margin-top: 30px;'>Redux Auth Team</h3></div></div>";

  transporter.sendMail({
    from,
    to: email,
    subject: 'Invitation To Create Account Email',
    html,
  }, (err,info) => {
     if (err) {
       console.log("mail send failed=>", err)
        //return err;
     }else{
       console.log("mail bend passed=>", info)
     }
  });
}

module.exports = sendInvitationMail;
