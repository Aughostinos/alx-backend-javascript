function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((acc, num) => acc + num, 0);
}
export default getStudentIdsSum;
