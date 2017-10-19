/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-11T09:04:02+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: server.js
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-16T10:49:05+03:00
 */



//including / loading express
var express = require('express');
var router =require('./router') ;
var bodyParser = require('body-parser');
var cors = require('cors')
var corsPrefetch = require('cors-prefetch-middleware');
const fileUpload = require('express-fileupload');

 

 



//create our app;
var app = express();

//tell node which folder to serve
app.use(express.static('client'));

// serve image files.
app.use(express.static('images'));

// default options
app.use(fileUpload());


//use bodyParser() to let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router(app);

app.listen(3000,function(){
  console.log('Express server is up and running on port 3000');
});
