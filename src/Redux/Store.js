import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { contactReducer } from "./Reducers/Reducer";

// const reducers = combineReducers(contactReducer)


const store = createStore(contactReducer, composeWithDevTools())

export default store;