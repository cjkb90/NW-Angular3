var express = require('express');
var app = express();
var path = require('path');
var routes = require('./server/routes/index.js');

app.use('/browser', express.static(path.join(__dirname, 'browser')));
app.use(routes);

var PORT = process.env.PORT || 1337;

app.listen(PORT, function(){
	console.log('Listening at', PORT);
});