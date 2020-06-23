var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('generic.njk');
});

module.exports = router;