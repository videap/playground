import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyFirstComponent />
  </React.StrictMode>
);