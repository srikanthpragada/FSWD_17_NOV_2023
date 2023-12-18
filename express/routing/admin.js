var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.end("Admin Handler")
});

router.get('/users', function(req, res, next) {
  res.end("Admin List Users")
});


module.exports = router;
