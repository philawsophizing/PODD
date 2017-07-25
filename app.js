const path = require('path');
const express = require('express');

// SERVER
const app = express();
const port = 1500;

// ROUTES
app.use(express.static(path.join(__dirname, 'client')));

app.listen(process.env.PORT || port, () => {
  console.log(`Podd running on ${port}`);
});

// WATCH AND BUNDLE FILES
const fileWatch = require('./bundle.js');

fileWatch();
