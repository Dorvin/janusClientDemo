var express = require('express');
var app = express();

app.use(express.static('demo'));

app.get('/', function (req, res) {
  res.send('go to /screensharingtest.html')
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
