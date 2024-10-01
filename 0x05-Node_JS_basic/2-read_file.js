const fs = require('fs');


function countStudents(path) {
  try{
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');
    if (lines.length <= 1) {
        console.log('')
    }
  }
  
}