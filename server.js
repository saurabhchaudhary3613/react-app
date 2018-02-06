/**
 * To build WebService
 */
const express = require('express');
var fs = require("fs");
const app = express(); //express returns object Refernce 
const HttpStatus = require('http-status-codes');

app.use(express.static('./build'));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/quiz', function (req, res) {
  fs.readFile("src/assets/data/data.json", 'utf-8', (error, data) => {
    if(error){
      res
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .send({
        error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
        status:error
    });
  }
     res
    .status(HttpStatus.OK)
    .send(JSON.parse(data))
  });
});

app.post('/quiz', function (req, res) {
  // First read existing users.
  fs.readFile("src/assets/data/data.json", 'utf-8', (error, data) => {
      data = JSON.parse( data );
      res.end( JSON.stringify(data));
  });
})



// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// //Writing api's - RestFull webservices
// app.get('/api/userlist', function (req, res) {
//     res.json(USERLIST);
// });

app.listen(8081, function () {
    console.log('Server is Ready!');
});