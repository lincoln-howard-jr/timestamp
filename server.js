const express = require ('express');
const app = express ();

app.get ('/timestamp', (req, res) => {
  res.json (new Date ());
})

module.exports = app;