
var express = require("express");
var moment = require('moment');
var router = express.Router(); 

console.log('This is working (index.js)');

function getDate() {
	return moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");
}

router.get('/', function(req, res, next) {
  res.render('../views/index.html', {});
});

router.post('/getDate', function(req, res, next) {
	return res.end(getDate());
});

module.exports = router;
