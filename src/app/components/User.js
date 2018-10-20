import React from "react";

/*1. container folder contains smart components, which has are connected to Redux, they don't 
know about state.
2. components folder contains dumb components (stateless components), which are not directly connected to Redux.
They don't know about state. For dumb components, there is no need to create a class and 
extend React.Component*/

/*export class User extends React.Component {
    render() {*/
export const User =(props) =>{
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The User Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>User Name: {props.username}</p>
                    </div>
                </div>
            </div>
        );
   // }
}
