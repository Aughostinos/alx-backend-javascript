const express = require('express');

const app = express();

// port
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}/`);
});

module.exports = app;