import { legacy_createStore as createStore } from 'redux'
import allReducers from './src/Reducers';


const store = createStore(allReducers)
export default store;