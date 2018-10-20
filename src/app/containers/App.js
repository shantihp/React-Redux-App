import React from "react";
import {connect} from "react-redux";
import {User} from "../components/User";
import {Main} from "../components/Main";

/*1. container folder contains smart components, which has are connected to Redux, they don't 
know about state.
2. components folder contains dumb components(stateless components), which are not directly connected to Redux.
They don't know about state.*/

class App extends React.Component {
	
	render() {					
		return(
			<div className="container">
				<Main changeUserName = {() => this.props.setName("Anna")}/>
				<User username = {this.props.user.name}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
		math: state.math
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		setName: (name) => {
			dispatch({
				type : "SET_NAME",
				payload: name
			});
		}		
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
