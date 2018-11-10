var express = require('express');
var router = express.Router();
var path = require('path');

const environement = process.env.NODE_ENV;
switch (environement) {
  case 'production':
    console.log('production');
    router.use(express.static('./'));
    router.use(express.static(__dirname + '/../assets')); // js, css, images, maps
    router.use('/views', express.static(__dirname + '/../views')); // html
    router.get('/', function(req, res) {
      if (config.useLocalLibFiles) {
        res.sendFile(path.join(__dirname, '../', 'appLocal.html')); // The application page with local lib references
      } else {
        res.sendFile(path.join(__dirname, '../', 'app.html')); // The application page with CDN lib references
      }
    });
    break;
  case 'dev':
    console.log('development');
    router.use(express.static('./src/assets')); // js, css, images, maps
    router.use(express.static('./src')); // app files for dev
    router.use('/views', express.static('./src')); // html
    router.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, '/src', 'index.html')); // The application page with local lib references
    });
}

module.exports = router;
