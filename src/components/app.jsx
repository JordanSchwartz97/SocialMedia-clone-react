import React from 'react';
import NavBar from './navbar/Navbar';
import ProfilePage from './profile/profile';
import LoginPage from './loginpage/LoginPage';
import {Switch, Route} from 'react-router-dom';
import Home from './home/Home';
 const AppHooks = () => {
     return(
         <div>
             <NavBar/>
            <Switch>
                <Route path = "/" exact component ={LoginPage} />
                <Route path = "/home" component = {Home}/>
                <Route path = "/profile" component ={ProfilePage} />
            </Switch>
        
         </div>
         
     )
 }

 export default AppHooks