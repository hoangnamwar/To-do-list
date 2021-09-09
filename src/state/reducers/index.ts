import { useEffect } from "react";
import { combineReducers } from "redux";
import showReducer from "./show";
// import amountReducer from "./amountReducers";
import todoItemReducer from "./todoItemReducers";


const reducers = combineReducers({
    dataTodo: todoItemReducer,
    show:showReducer
});

// useEffect(() => {
//     localStorage.setItem('data', JSON.stringify(todoItemReducer))
//   }, [reducers])

// reducers.subscribe(()=>{
//     localStorage.setItem('data', JSON.stringify(todoItemReducer))
//   })

export default reducers;

export type RootState = ReturnType<typeof reducers>