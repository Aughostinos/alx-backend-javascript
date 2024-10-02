const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const databaseFile = process.argv[2];

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  fs.readFile(databaseFile, 'utf8', (err, data) => {
    if (err) {
      res.end('Cannot load the database');
    } else {
      const lines = data.trim().split('\n');
      const header = lines[0].split(',');
      const students = lines.slice(1);
      const fieldStudents = {};
      let totalStudents = 0;

      for (const line of students) {
        if (line.trim() !== '') {
          const studentData = line.split(',');
          if (studentData.length === header.length) {
            const student = {};
            for (let i = 0; i < header.length; i += 1) {
              student[header[i].trim()] = studentData[i].trim();
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
});

app.listen(port);

module.exports = app;
