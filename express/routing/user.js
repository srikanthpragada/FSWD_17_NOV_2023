var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.end("User Root Handler")
});

router.get('/list', function(req, res, next) {
  res.end("Users List Handler")
});


module.exports = router;
