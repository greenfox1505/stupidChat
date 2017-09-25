#!/usr/bin/env nodejs
const path = require('path');
const express = require('express')
const app = express()

var settings = {
	port:9500
}

var messages = [];

app.use('/', express.static(path.join(__dirname, 'static')))

app.get('/msg/:name/:msg', function (req, res) {
	console.log(req.params);
	req.params.date = Date.now();
	messages.push(req.params);
	res.send("" + req.params.date);
})
app.get('/history',function(req,res){
	res.send(messages);
})

app.listen(settings.port, function () {
  console.log('Example app listening on port ' + settings.port +'!')
})
