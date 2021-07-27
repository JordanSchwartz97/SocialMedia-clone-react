import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Navbar.css';


function  NavBar() {


    return (
        <div>
            <nav className ="navbar navbar-dark bg-primary">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <ul className= "navbar-nav">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </ul>
            <ul className= "navbar-item">
                <a className="nav-link" href="#">Profile <span className="sr-only">(current)</span></a>
            </ul>
            <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn" type="submit">Search</button>
            </nav>
        </div>
    );
}

export default NavBar;