export const getStudent = (data) => {
  return { type: "ADD_STUDENTS", payload: data };
};

export const getUniqStudents = (data) => {
  return { type: "ADD_UNIQ_STUDENTS", payload: data };
};
