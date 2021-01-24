import { createStore, combineReducers } from "redux";
import studentReducer, { uniqStudentReducer } from "../reducer/studentReducer";
export const configureStore = () => {
  const store = createStore(
    combineReducers({
      students: studentReducer,
      uniqStudents: uniqStudentReducer,
    })
  );
  return store;
};
