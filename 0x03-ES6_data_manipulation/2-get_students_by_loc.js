function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((student) => student.location === city);
}
export default getStudentsByLocation;
