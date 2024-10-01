const fs = require('fs');


function countStudents(path) {
  try{
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');
    if (lines.length === 0) {
        throw new Error('Cannot load the database')
    }
    const students = {};
    let students_num = 0;
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim()
      if (line === '') continue;
      const[firstname, lastname, age, field] = line.split(',');

      if (!students[field]) {
        students[field] = [];
      }
      student[field].push(firstname);
      students_num++;
    }
    console.log(`Number of students: ${students_num}`);
    //It should log the number of students in each field
    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    } 
  } catch (error) {
      throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;