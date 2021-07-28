import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Navbar.css';


const  NavBar = (props) => {


    return (
        <div>
            <nav className ="navbar navbar-dark bg-primary">
            <a className="navbar-brand">Blue Falcon Social Media</a>
            <ul className= "navbar-nav">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </ul>
            <ul className= "navbar-item">
                <a className="nav-link" href="#">Profile <span className="sr-only"></span></a>
            </ul>
            <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn" type="submit">Search</button>
            </nav>
        </div>
    );
}

export default NavBar;