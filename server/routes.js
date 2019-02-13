const path = require('path');

module.exports = (app) => {

  app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'./../dist/index.html'));
  });

  app.get('/about',function(req,res) {
    res.sendFile(path.join(__dirname+'./../dist/index.html'));
  });

  app.get('/contact',function(req,res) {
    res.sendFile(path.join(__dirname+'./../dist/index.html'));
  });

  app.get('/.well-known/assetlinks.json',function(req,res) {
    res.sendFile(path.join(__dirname+'./../.well-known/assetlinks.json'));
  });
  
  app.get('*', function(req, res, next) {
    res.status(404).send('Not found Route');
  });
}
