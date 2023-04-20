import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyFirstComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 0
        }
    }

    addOne() {
        console.log(this.state.value)
    }

    render() {
        return <h1> Hello World using React </h1>;
    }
}

ReactDOM.render(
    <MyFirstComponent/>,
    document.getElementById('root')
);