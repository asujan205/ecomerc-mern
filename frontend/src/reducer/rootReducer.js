import { productListReducer } from "./productReducer";
import {combineReducers} from 'redux'
const rootReducer = combineReducers({productListReducer})
export default rootReducer