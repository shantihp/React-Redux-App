

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
		case "SET_NAME_FULFILLED" :
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

export default userReducer;