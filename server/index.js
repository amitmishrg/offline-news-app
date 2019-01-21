const express = require('express');

module.exports = (app) => {

  app.set('views', 'app/views');
  app.use(express.static('dist'));
  app.use(express.static(__dirname + '/dist', {
      index: false,
      extensions: ['ejs', 'html']
  }));
  
  require('./routes')(app);
}
