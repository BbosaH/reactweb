//including / loading express
var express = require('express');

//create our app;
var app = express();

//tell node which folder to serve
app.use(express.static('client'));

app.listen(3000,function(){
  console.log('Express server is up and running on port 3000');
});
