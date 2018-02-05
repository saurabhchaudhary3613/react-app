var express = require('express')
var path = require('path')
var fs = require("fs");
var _ = require("lodash")
const port = 3000;
const app = express();
const HttpStatus = require('http-status-codes');
app.use(express.static('./build'));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/api/quiz', function (req, res) {
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

app.post('/api/quiz', function (req, res) {
  fs.readFile("src/assets/data/data.json", 'utf-8', (error, data) => {
      data = JSON.parse( data );
      res.end( JSON.stringify(data));
  });
})

app.listen(port, function (error) {
  if (error) {
    throw err
  }
});

