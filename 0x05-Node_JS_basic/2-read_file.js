const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = {};
    let studentsNum = 0;

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i].trim();

      if (line !== '') {
        const [firstname, , , field] = line.split(','); // Ignore `lastname` and `age` as they're not used

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
        studentsNum += 1;  // Use += 1 instead of ++
      }
    }

    console.log(`Number of students: ${studentsNum}`);

    // Log the number of students in each field
    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
