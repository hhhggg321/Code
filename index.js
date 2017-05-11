var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/node_modules'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
