import { createStore, combineReducers } from "redux";
import studentReducer from "../reducer/studentReducer";
export const configureStore = () => {
  const store = createStore(
    combineReducers({
      students: studentReducer,
    })
  );
  return store;
};
