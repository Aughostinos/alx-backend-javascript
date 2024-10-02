const http = require('http');
const countStudents = require('./3-read_file_async');

// Create a server
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');    
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
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
    } else {
        res.statusCode =404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found')
    }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server running at http://127.0.0.1:1245/');
});

module.exports = app;
