import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

// For Promise API usage, use redux-promise dependency. Else use redux-thunk dependency.
export default createStore(
	combineReducers({math, user}), 
	{}, 
	applyMiddleware(logger, thunk, promise())); // applying middleware

