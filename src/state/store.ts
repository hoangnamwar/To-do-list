import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// const persistedState = localStorage.getItem('reduxState') 
//                 ? JSON.parse(localStorage.getItem('reduxState'))
//                 : {}

export const store = createStore(
    reducers,
    // persistedState,
    applyMiddleware(thunk)
)

// store.subscribe(()=>{
//     localStorage.setItem('data', JSON.stringify(store.getState()))
//   })

export default store