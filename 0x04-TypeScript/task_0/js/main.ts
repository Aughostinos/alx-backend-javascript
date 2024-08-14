/* Creating interface */
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
/* Creating two students */
const student: Student = {
    firstName: 'Augustinos',
    lastName: 'Nabil',
    age: 31,
    location: 'Alexandria',
};
const student2: Student = {
    firstName: 'Donna',
    lastName: 'Habib',
    age: 31,
    location: 'Alexandria',
};
/* Creating an array containing the two students */
const studentList: Student[] = [student, student2];

/* Creating table */
const table = document.createElement("table");
/*header*/
const tableHeader = table.insertRow();
const headerCell1 = tableHeader.insertCell();
headerCell1.innerText = "First Name";
const headerCell2 = tableHeader.insertCell();
headerCell2.innerText = "Location";

/*adding students to the table*/
studentList.forEach((student => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    cell1.innerText = student.firstName;
    const cell2 = row.insertCell();
    cell2.innerText = student.location;
}));

document.body.appendChild(table);
