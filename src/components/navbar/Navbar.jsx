import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NavBar.css';


const  NavBar = (props) => {


    return (
        <div>
            <nav className ="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Blue Falcon Social Media </a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" 
                    type="text" 
                    placeholder="Search for a friend!" 
                    aria-label="Search">
                    </input>
                    <button className="btn btn-outline-success my-2 my-sm-0" 
                    type="submit"
                    >Search
                    </button>
                </form>
            </nav>
        </div>
    );
}

export default NavBar;