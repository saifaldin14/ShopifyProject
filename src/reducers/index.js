import { combineReducers } from "redux";

import getNasaData from "./getNasaData";

const rootReducer = combineReducers({
  getNasaData,
});

const mapStateToRootReducer = (state, action) => rootReducer(state, action);
export default mapStateToRootReducer;
