import { combineReducers } from "redux";
import studentReducer  from "./StudentReducer";
import loadingReducer from './loadingReducer';

const allReducers = combineReducers({
    studentReducer,
    loadingReducer
})


export default allReducers