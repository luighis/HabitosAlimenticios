import { combineReducers } from "redux";
import baseDataReducer from "./baseDataReducer";
import habitDataReducer from "./habitDataReducer";
import consumptionReducer from "./consumptionReducer";

const rootReducer = combineReducers({
  baseData: baseDataReducer,
  habitData: habitDataReducer,
  consumptionData: consumptionReducer,
});

export default rootReducer;
