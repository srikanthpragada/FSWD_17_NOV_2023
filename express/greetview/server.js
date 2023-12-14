var express = require('express');
var path = require('path');
var app = express();
var port = 8888 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render("greet")
})
 

app.listen(port, () => {
  console.log(`Express Application listening on port ${port}`)
})  
