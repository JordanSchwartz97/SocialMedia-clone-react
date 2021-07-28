import React from 'react';
import NavBar from './navbar/Navbar';
import ProfilePage from './profile/profile';
import LoginPage from './loginpage/LoginPage';
import {Switch, Route} from 'react-router-dom';
import Home from './home/Home';
import RegisterPage from './registerpage/RegisterPage';
<<<<<<< HEAD
=======
import './app.css'
>>>>>>> 63ed5bf7b4bb7b010d48fa9830750658b43119a7
 const AppHooks = () => {


     return(
<<<<<<< HEAD
         <div>
             
=======
         <div className="body">
             <NavBar/>
>>>>>>> 63ed5bf7b4bb7b010d48fa9830750658b43119a7
            <Switch>
                <Route path = "/" exact component ={LoginPage} />
                <Route path = "/home" component = {Home}/>
                <Route path = "/profile" component ={ProfilePage} />
<<<<<<< HEAD
                <Route path = "/register" component = {RegisterPage} />
=======
                <Route path = "/register" component ={RegisterPage} />
>>>>>>> 63ed5bf7b4bb7b010d48fa9830750658b43119a7
            </Switch>
        
         </div>
         
     )
 }

 export default AppHooks