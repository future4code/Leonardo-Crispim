import { combineReducers } from "redux";
import tasklist from './tasklist';

const rootReducer = combineReducers({
    tasklist: tasklist,

  });

export default rootReducer;