var express = require('express');
var router = express.Router();

router.get('/(:name)?', function(req, res) {
  req.params.name != undefined ?
      res.render(req.params.name + '.njk')
      :   res.render('index.njk');
});

module.exports = router;
