var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var md = require('markdown-it')({ html: true });

var post = {
    date: '07 Juillet 2020',
    title: 'HTML et CSS',
    description: 'Ce cours pour débutant traite de l\'utilisation des langages HTML et CSS',
    image: {
      src: 'images/pic01.jpg',
      alt: ''
  },
    content: ''
}

// get the post content from /public/posts
fs.readFile(path.join(__dirname, '../public/posts', 'htmlCss.md'),
  'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    post.content = md.render(data);
});

router.get('/', function(req, res) {
  res.render(
    'generic.njk', {
      headerTitle: 'PSthely - Web Dev',
      title: 'HTML et CSS - Massively by HTML5 UP',
      post: post
  });
});

module.exports = router;