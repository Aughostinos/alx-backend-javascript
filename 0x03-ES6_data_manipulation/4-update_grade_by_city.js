function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const updatedGrades = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: updatedGrades ? updatedGrades.grade : 'N/A',
      };
    });
}
export default updateStudentGradeByCity;
