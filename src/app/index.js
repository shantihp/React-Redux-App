/*import React from "react";
import {render} from "react-dom";

import {User} from "./components/User";
import {Main} from "./components/Main";

class App extends React.Component {
	constructor(props){
		super();
		this.state = {
			username : "Max"
		};
	}

	changeUserName(newName) {		
		this.setState({
			username: newName
		});
	}

	render() {					
		return(
			<div className="container">
				<Main changeUserName = {this.changeUserName.bind(this)}/>
				<User username = {this.state.username}/>
			</div>
		);
	}
}
render(<App/> , window.document.getElementById('reactReduxApp'));*/

/*Store, State and Dispatching of Action.
We first create a store, we then tell the store who is responsible for changing the state 
(the reducer), and then we dispatch actions on the store.*/

import React from "react";
import {render} from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import {Provider} from "react-redux";
import App from "./containers/App";
 
const mathReducer = (state = {
	result : 1,
	lastValues : []
}, action) => {
	switch(action.type){
		case "ADD" :
			state = {
				...state, // spread operator: returns the property of older property
				result : state.result + action.payload, // overrides the actualy result value 
				//obtained
				lastValues : [...state.lastValues, action.payload]
			};	
			// state.lastValues.push(action.payload); // mutable way. Wrong to do this way.
			break;
		case "SUBTRACT" : 
			state = {
				...state, // spread operator: returns the property of older property
				result : state.result - action.payload, // overrides the actualy result value 
				//obtained
				lastValues : [...state.lastValues, action.payload]
			};
			// state.lastValues.push(action.payload); // mutable way. Wrong to do this way.
			lastValues : [...state.lastValues, action.payload]
			break;
	}
	return state;
};

// Multiple reducers and multiple states one per reducer
const userReducer = (state = {
	name : "Max",
	age : 27
}, action) => {
	switch(action.type){
		case "SET_NAME" :
			state = {
				...state, // spread operator: returns the property of older property
				name : action.payload
			};
			break;
		case "SET_AGE" : 
			state = {
				...state, // spread operator: returns the property of older property
				age : action.payload
			};			 
			break;
	}
	return state;
};

//const store = createStore(combineReducers({mathReducer, userReducer})); 
// takes 2 arguments- reducer and initial app state

const myLogger = (store) => (next) => (action) => {
	console.log("Logged Action: ", action);
	next(action); // very important to have
};

const store = createStore(combineReducers({math : mathReducer, user: userReducer}), {}, 
	applyMiddleware(myLogger, logger)); // applying middleware, middleware chaining

store.subscribe(() => {
	console.log("Store updated!", store.getState());	
});
render(
	<Provider store={store}>
		<App/> 	
	</Provider>  , 
	window.document.getElementById('reactReduxApp')
);

// dispatching action now. The dispatch function is taking an Action as argument
/*store.dispatch({
	type: "ADD",
	payload: 100	
});

store.dispatch({
	type: "ADD",
	payload: 22	
});

store.dispatch({
	type: "SUBTRACT",
	payload: 80	
});
store.dispatch({
	type: "SET_AGE",
	payload: 30
});*/

