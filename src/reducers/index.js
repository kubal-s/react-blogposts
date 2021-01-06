import { combineReducers } from "redux";
import postReducer from './postReducer';
import userReducer from "./userReducer";
// boilerplate when there are no reducers in application till now
// export default combineReducers({
//     func : ()=> "hi"
// })
export default combineReducers({
    posts : postReducer,
    users :userReducer
})