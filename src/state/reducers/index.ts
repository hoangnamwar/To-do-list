import { combineReducers } from "redux";
import showReducer from "./show";
import todoItemReducer from "./todoItemReducers";


const reducers = combineReducers({
    dataTodo: todoItemReducer,
    show:showReducer
});


export default reducers;

export type RootState = ReturnType<typeof reducers>