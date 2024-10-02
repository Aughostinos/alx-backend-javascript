// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then((fieldStudents) => {
        let output = 'This is the list of our students\n';
        const fields = Object.keys(fieldStudents).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

        let totalStudents = 0;
        for (const field of fields) {
          const list = fieldStudents[field];
          totalStudents += list.length;
        }
        output += `Number of students: ${totalStudents}\n`;

        for (const field of fields) {
          const list = fieldStudents[field];
          output += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
        }
        response.status(200).send(output.trim());
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const databaseFile = process.argv[2];
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databaseFile)
      .then((fieldStudents) => {
        const list = fieldStudents[major];
        if (list) {
          response.status(200).send(`List: ${list.join(', ')}`);
        } else {
          response.status(200).send('List:');
        }
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
