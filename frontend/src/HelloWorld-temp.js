import React, { Component } from 'react';

/*
    I placed my HelloWorld component here because, react is not letting me put it outside the src folder
*/
class HelloWorld extends Component {
    render() {
        let name = "Octavio Avila-Cardet";
        return (
            <div className="hello-world-container">
                <h1 className="hello-world-message">Hello World from {name}!</h1>
            </div>
        );
    }
}

export default HelloWorld;