const express = require('express');
const app = express();
const config = require('./config/config');

require('./index')(app);

app.listen(config.app.port, ()=> {
  console.log('Running on '+'http://localhost:'+config.app.port);
})
