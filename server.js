const express = require('express');
const app = express();

let counter = 0;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/counter', function(req, res) {
  counter++;
  res.json({ counter: counter });
});

app.put('/counter/:value', function(req, res) {
  counter = Number(req.params.value);
  res.json({ counter: counter });
});

app.listen(3000, function() {
  console.log('Elm REST server listening on port 3000.');
});
