import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { contactReducer } from "./Reducers/Reducer";

const reducers = combineReducers({
    contact: contactReducer,
})


const store = createStore(reducers, composeWithDevTools())

export default store;