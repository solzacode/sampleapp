var express = require('express');
var app = express();
var cities = {cities:["Amsterdam","Berlin","New Delhi","San Francisco","Hyderabad"]}

app.get('/', function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(cities));
    res.end();
});

var port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;
