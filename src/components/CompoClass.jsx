import React, { Component } from 'react';

class CompoClass extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter: 1 
        };

        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
    }
    plus() {
        this.setState({counter: this.state.counter+1})
        console.log('test ++');
    }
    minus() {
        this.setState({counter: this.state.counter-1})
        console.log('test --');
    }
    render() {
        return (
            <div>
                <h1>I am class compo</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={this.plus}>+</button>
                <button onClick={this.minus}>-</button>
            </div>
        )
    }
}

export default CompoClass;