var express = require('express');
var app = express();

// existem outros servidores web estaticos
// https://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server
// https://stackoverflow.com/questions/24346161/nodejs-connect-cannot-find-static
// mas o express tb aceita ser um deles (embora ele seja mais robusto)
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// https://expressjs.com/pt-br/starter/static-files.html
console.log(__dirname);
app.use('/', express.static(__dirname + '/../'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});