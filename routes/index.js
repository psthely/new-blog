var express = require('express');
var router = express.Router();

var posts = [
  {
    date: 'April 24, 2017',
    title: 'Sed magna ipsum faucibus',
    href: 'generic',
    image: { src: 'images/pic02.jpg', alt: '' },
    description: 'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.'
  },
  {
    date: 'April 22, 2017',
    title: 'Primis eget imperdiet lorem',
    href: 'generic',
    image: { src: 'images/pic03.jpg', alt: '' },
    description: 'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.'
  },
  {
    date: 'April 18, 2017',
    title: 'Ante mattis interdum dolor',
    href: 'generic',
    image: { src: 'images/pic04.jpg', alt: '' },
    description: 'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.'
  },
  {
    date: 'April 14, 2017',
    title: 'Tempus sed nulla imperdiet',
    href: 'generic',
    image: { src: 'images/pic05.jpg', alt: '' },
    description: 'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.'
  },
  {
    date: 'April 11, 2017',
    title: 'Odio magna sed consectetur',
    href: 'generic',
    image: { src: 'images/pic06.jpg', alt: '' },
    description: 'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.'
  },
  {
    date: 'April 7, 2017',
    title: 'Augue lorem primis vestibulu',
    href: 'generic',
    image: { src: 'images/pic07.jpg', alt: '' },
    description: 'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.'
  }
];

router.get('/', function(req, res) {
  res.render(
    'index.njk', {
      title: 'Massively by HTML5 UP',
      posts: posts
    }
  );
});

module.exports = router;
