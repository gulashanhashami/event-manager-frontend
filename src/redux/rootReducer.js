
import {combineReducers} from "redux";
import { reducer } from "./reducer";
import { userReducer } from "./userReducer/reducer";



export const rootReducer = combineReducers({
    user: userReducer,
    data: reducer
});