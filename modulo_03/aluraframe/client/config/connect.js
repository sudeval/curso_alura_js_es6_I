var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

// connect.js na raiz funcionou
// app.use(serveStatic(__dirname + "/"));
app.use(serveStatic(__dirname + "/../"));
app.listen(3000);