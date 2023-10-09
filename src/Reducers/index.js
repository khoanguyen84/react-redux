import { combineReducers } from "redux";
import studentReducer  from "./StudentReducer";
import utilitiesReducer from './utilitiesReducer';

const allReducers = combineReducers({
    studentReducer,
    utilitiesReducer
})


export default allReducers