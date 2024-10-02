// full_server/utils.js
import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const header = lines[0].split(',');
        const students = lines.slice(1);
        const fieldStudents = {};

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
            }
          }
        }
        resolve(fieldStudents);
      }
    });
  });
}
