function getStudentIdsSum(getListStudents){
  return getListStudents.reduce((acc, num) => acc + num);
}
export default getStudentIdsSum;
