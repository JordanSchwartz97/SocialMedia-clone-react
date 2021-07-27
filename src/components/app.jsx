import React from 'react';
import NavBar from './navbar/Navbar';
import ProfilePage from './profile/profile';
import LoginPage from './loginpage/LoginPage';
import {Switch, Route} from 'react-router-dom';

 const AppHooks = () => {
     return(
         <div>
            <Switch>
                <Route path = "/" exact component ={LoginPage} />
                <Route path = "/profile" component ={ProfilePage} />
                
            </Switch>
         </div>
         
     )
 }

 export default AppHooks