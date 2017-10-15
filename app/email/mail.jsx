/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-15T17:56:53+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: mail.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-15T18:10:10+03:00
 */
import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
  service : 'gmail',
  secure :false,
  port:25,
  auth :{
    user :'bbosa.henry1@gmail.com',
    password : 'gloriagloria'
  },
  tls :{
    rejectUnauthorized :false
  }
});


export const sendMailtoUSer =(usermail)=>{

  let HelperOptions ={
    from: '"Henry Bbosa" <bbosa.henry1@gmail.com>',
    to :usermail,
    subject: 'Hello Henry',
    text : 'You are invited at aurity'
  }

  transporter.sendMail(HelperOptions,(err,info)=>{
    if(err){
      console.log(err);
    }
    console.log("email was sent");
    console.log(info);
  })

}
