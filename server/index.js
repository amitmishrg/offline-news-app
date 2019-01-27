const express = require('express');
const compression = require('compression')

module.exports = (app) => {

  // compress all responses
  app.use(compression());
  app.set('views', 'app/views');  
  app.use(express.static('dist'));
  app.use(express.static(__dirname + '/dist', {
      index: false,
      extensions: ['ejs', 'html']
  }));
  
  require('./routes')(app);
}
