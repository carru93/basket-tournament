var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('bodyParser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(__dirname + 'index.html');
});

http.listen(1234, function(req, res){
  console.log("Server in ascolto su 1234");
});

app.post('', function(req, res){

});
