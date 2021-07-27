import React from 'react';
import ReactDOM from 'react-dom';
import AppHooks from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';




//const jsxElement = <h1>Our React App</h1>;
//console.log(jsxElement);

ReactDOM.render(
    <Router>
        <React.StrictMode>
            <AppHooks/>
        </React.StrictMode>
    </Router>, 
    document.getElementById('root')
);