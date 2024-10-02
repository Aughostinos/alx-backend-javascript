const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
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
              const { field } = student;
              if (!fieldStudents[field]) {
                fieldStudents[field] = [];
              }
              fieldStudents[field].push(student.firstname);
              totalStudents += 1;
            }
          }
        }

        console.log(`Number of students: ${totalStudents}`);
        Object.keys(fieldStudents).forEach((field) => {
          const list = fieldStudents[field];
          console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        });
        resolve();
      }
    });
  });
}

module.exports = countStudents;
