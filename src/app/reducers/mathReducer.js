
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

export default mathReducer;