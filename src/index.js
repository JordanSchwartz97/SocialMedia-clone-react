import React from 'react';
import ReactDOM from 'react-dom';
import AppHooks from './components/app';
import 'bootstrap/dist/css/bootstrap.css';


const jsxElement = <h1>Our React App</h1>;
console.log(jsxElement);

ReactDOM.render(<AppHooks/>, document.getElementById('root'));