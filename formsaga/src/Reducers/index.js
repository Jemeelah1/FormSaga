import { combineReducers }  from "redux";
import reducer from "./reducer";

const reducers = combineReducers({form:reducer})
export default reducers;