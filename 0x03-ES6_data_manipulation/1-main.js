import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello")); // Should print: []
console.log(getListStudentIds(getListStudents())); // Should print: [1, 2, 5]
