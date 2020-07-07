var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render(
    'elements.njk', {
      headerTitle: 'PSthely - Web Dev',
      title: 'Elements Reference - Massively by HTML5 UP'
  });
});

module.exports = router;