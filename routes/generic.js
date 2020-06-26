var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var md = require('markdown-it')();

var post = {
    date: 'April 25, 2017',
    title: 'This is a generic page',
    description: 'Aenean ornare velit lacus varius enim ullamcorper proin aliquam facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor amet nullam sed etiam veroeros.',
    image: {
      src: 'images/pic01.jpg',
      alt: ''
  },
    content: ''
}

// get the post content from /public/posts
fs.readFile(path.join(__dirname, '../public/posts', 'generic.md'),
  'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    post.content = md.render(data);
});

router.get('/', function(req, res) {
  res.render(
    'generic.njk', {
      title: 'Generic Page - Massively by HTML5 UP',
      post: post
  });
});

module.exports = router;