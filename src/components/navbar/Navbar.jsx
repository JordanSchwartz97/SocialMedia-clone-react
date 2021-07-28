import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './Navbar.css';


const  NavBar = (props) => {


    return (
        <nav>
           <ul>
               
               <Link to ='/home'>
                   <li>Home</li>
               </Link>
               <Link to ='/profile'>
                   <li>Profile</li>
               </Link>
               <Link to ='/register'>
                   <li>Register</li>
               </Link>

           </ul>
        </nav>
    );
}

export default NavBar;