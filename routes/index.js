var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index.njk', { title: 'Massively by HTML5 UP' });
});

module.exports = router;
