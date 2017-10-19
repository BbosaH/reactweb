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
 var imagesUpload =require('images-upload-middleware');
 var UUID = require('uuid-js');

 const router = (app) => {
   app.post('/send_invitation',(req, res, next)=>{
      console.log("yellow email",req.body)
      var {email} = req.body
      console.log("blue email",email)
      //sendInvitationMail("bbosa.henry1@gmail.com")
   });

  //  app.post('/article_image',imagesUpload(
  //   'images',
  //   'http://localhost:3000/images'
  //  ))
   app.post('/article_image', function(req, res) {
      if (!req.files)
        return res.status(400).send('No files were uploaded.');
    
      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
      let sampleFile = req.files.imageFiles;
      console.log("The server files",sampleFile)
       let newFileName = 'articleimage'+UUID.create()+'.jpg';
      // Use the mv() method to place the file somewhere on your server
      sampleFile.mv('./images/'+newFileName, function(err) {
        if (err)
          return res.status(500).send(err);
        sampleFile.name=newFileName;
        res.send({filename : newFileName});
      });
    });
 };

 module.exports = router;
