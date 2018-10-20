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
import {createStore} from "redux";

const initialState = {
	result : 1,
	lastValues : [],
	username : "Max"
};

const reducer = (state = initialState, action) => {
	switch(action.type){
		case "ADD" :
			state = {
				...state, // spread operator: returns the property of older property
				result : state.result + action.payload, // overrides the actualy result value obtained
				lastValues : [...state.lastValues, action.payload]
			};	
			// state.lastValues.push(action.payload); // mutable way. Wrong to do this way.
			break;
		case "SUBTRACT" : 
			state = {
				...state, // spread operator: returns the property of older property
				result : state.result - action.payload, // overrides the actualy result value obtained
				lastValues : [...state.lastValues, action.payload]
			};
			// state.lastValues.push(action.payload); // mutable way. Wrong to do this way.
			lastValues : [...state.lastValues, action.payload]
			break;
	}
	return state;
};
const store = createStore(reducer); // takes 2 arguments- reducer and initial app state

store.subscribe(() => {
	console.log("Store updated!", store.getState());	
});

// dispatching action now. The dispatch function is taking an Action as argument
store.dispatch({
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