/*
Create a node server using express.js  -done
The server has to print a page that has the date (Day of week, Month, Day, Year all spelled out)
Use moment.js 
*/

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var moment = require('moment');
var cons = require('consolidate');
var index = require('./routes/index');

var app = express();

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));

app.use('/', index);

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/',function(req,res){      
     res.sendFile('routes/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})

module.exports = app;
