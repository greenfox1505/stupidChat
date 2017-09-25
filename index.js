#!/usr/bin/env nodejs
const express = require('express')
const app = express()

var settings = {
	port:9000
}

var messages = [];

app.use('/', express.static('static'))

app.put('/msg/:name/:msg', function (req, res) {
	console.log(req.params);
	messages.push(req.params.date = Date.now());
})
app.get('/history',function(req,res){
	res.send(messages);
})

app.listen(settings.port, function () {
  console.log('Example app listening on port ' + settings.port +'!')
})
