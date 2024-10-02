const http = require('http');
const fs = require('fs');

const port = 1245;
const databaseFile = process.argv[2];

const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    fs.readFile(databaseFile, 'utf8', (err, data) => {
      if (err) {
        res.write('Cannot load the database');
        res.end();
      } else {
        const lines = data.trim().split('\n');
        const header = lines[0].split(',');
        const students = lines.slice(1);
        const fieldStudents = {};
        let totalStudents = 0;

        for (let i = 0; i < students.length; i += 1) {
          const line = students[i];
          if (line.trim() !== '') {
            const studentData = line.split(',');
            if (studentData.length === header.length) {
              const student = {};
              for (let j = 0; j < header.length; j += 1) {
                student[header[j].trim()] = studentData[j].trim();
              }
              const field = student.field;
              if (!fieldStudents[field]) {
                fieldStudents[field] = [];
              }
              fieldStudents[field].push(student.firstname);
              totalStudents += 1;
            }
          }
        }

        res.write(`Number of students: ${totalStudents}\n`);
        Object.keys(fieldStudents).forEach((field) => {
          const list = fieldStudents[field];
          res.write(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`);
        });
        res.end();
      }
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

app.listen(port);

module.exports = app;
