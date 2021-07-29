import React, {useState, useEffect} from 'react'
import NavBar from './navbar/Navbar';
import ProfilePage from './profile/profile';
import LoginPage from './loginpage/LoginPage';
import {Switch, Route} from 'react-router-dom';
import Home from './home/Home';
import RegisterPage from './registerpage/RegisterPage';
import './app.css'
import axios from 'axios';
import jwt_decode from 'jwt-decode';
 const AppHooks = () => {

   

     return(
         <div className="body">
             <NavBar/>
            <Switch>
                <Route path = "/" exact component ={LoginPage} />
                <Route path = "/home" component = {Home}/>
                <Route path = "/profile" component ={ProfilePage}  />
                <Route path = "/register" component ={RegisterPage} />
            </Switch>
        
         </div>
         
     )
 }

 export default AppHooks