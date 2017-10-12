/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-11T09:04:02+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: server.js
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-12T04:30:27+03:00
 */



//including / loading express
var express = require('express');

//create our app;
var app = express();

//tell node which folder to serve
app.use(express.static('client'));

app.listen(3000,function(){
  console.log('Express server is up and running on port 3000');
});
