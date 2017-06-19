const express = require('express');
const cors = require('cors')
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/getAlumnos', function (req, res) {
  res.send([
  	{alumno: 'alumno1'},
  	{alumno: 'alumno2'}
  ]);
})


app.listen(3000, function () {})