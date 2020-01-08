const path = require('path');
const express = require('express');

const PORT = 31415;

var app = express();

app.use(require('./routes'));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

const server = app.listen(PORT, function() {
  console.info('🌍 Listening on port ' + server.address().port);
});
