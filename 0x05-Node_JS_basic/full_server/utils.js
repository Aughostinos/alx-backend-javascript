// full_server/utils.js
import fs from 'fs/promises';

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
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
          const field = student.field;
          if (!fieldStudents[field]) {
            fieldStudents[field] = [];
          }
          fieldStudents[field].push(student.firstname);
        }
      }
    }
    return fieldStudents;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;
