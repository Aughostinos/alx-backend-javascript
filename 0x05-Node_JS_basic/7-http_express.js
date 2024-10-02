const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

// Root route for '/'
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

// Students route for '/students'
app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  try {
    const databasePath = process.argv[2];
    const data = await countStudents(databasePath);
    res.write(data);
  } catch (error) {
    res.write(error.message);
  } finally {
    res.end();
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
