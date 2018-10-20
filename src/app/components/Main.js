import React from "react";

/*1. container folder contains smart components, which has are connected to Redux, they don't 
know about state.
2. components folder contains dumb components(stateless components), which are not directly connected to Redux.
They don't know about state. For dumb components, there is no need to create a class and 
extend React.Component*/

/*export class Main extends React.Component {
    render() {*/
export const Main =(props) =>{
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button
                            className="btn btn-primary"
                            onClick={() => props.changeUserName('Anna')}>Change the Username</button>
                    </div>
                </div>
            </div>
        );
    //}
}