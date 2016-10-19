var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.resolve('.')));
app.listen(process.env.PORT || 8003);
console.log('i am up.');