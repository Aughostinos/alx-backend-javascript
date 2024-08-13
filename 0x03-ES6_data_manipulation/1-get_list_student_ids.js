function getListStudentIds(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  const studentIds = getListStudents.map((student) => student.id);
  return studentIds;
}
export default getListStudentIds;
