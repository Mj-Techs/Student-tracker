const initialValue = [];

const studentReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_STUDENTS": {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};
export default studentReducer;

// uniqStudents

const initialStateValue = [];
export const uniqStudentReducer = (state = initialStateValue, action) => {
  switch (action.type) {
    case "ADD_UNIQ_STUDENTS": {
      return [...new Set(action.payload.map((item) => item.name))];
    }
    default: {
      return [...state];
    }
  }
};
