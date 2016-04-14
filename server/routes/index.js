var express = require('express');
var router = express.Router();
var path = require('path');
var indexHtml = path.join(__dirname, '..', '..', 'browser', 'index.html');

router.get('/', function(req,res){
	res.sendFile(indexHtml);
});

module.exports = router;