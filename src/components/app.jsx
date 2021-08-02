import React, {useState, useEffect} from 'react'
import NavBar from './navbar/Navbar';
import ProfilePage from './profile/profile';
import LoginPage from './loginpage/LoginPage';
import {Switch, Route,Redirect} from 'react-router-dom';
import Home from './home/Home';
import RegisterPage from './registerpage/RegisterPage';
import './app.css'
import axios from 'axios';
import jwt_decode from 'jwt-decode';
 const AppHooks = () => {

    let [user, setUser] = useState({});
  
    const jwt = localStorage.getItem('token');
    let decoded = '';
   try{
       decoded = jwt_decode(jwt);
       
   } catch(ex) {
      console.log(ex); 
   } 
   

    const getUserData = async () => {
       await axios.get(`http://localhost:5000/api/collections/user/${decoded._id}`)
       .then((value) => {
       setUser(value.data)
       console.log(value.data)
       })
   }

   

   
   
   useEffect(() => {
       getUserData()
       console.log(user)
   },[])
   

   

     return(
         <div className="body">
             <NavBar/>
            <Switch>
                <Route path = "/" exact component ={LoginPage} />
                <Route path = "/home" component = {Home}/>
                <Route path = "/profile" render = { props => {
                    if(!user){
                        return <Redirect to ="/" />
                    } else {
                        return <ProfilePage {...props} user={user} />
                        }
                    }} />

            <Route path = "/register" render = { props => {
                    if(!user){
                        return <Redirect to ="/register" />
                    } else {
                        return <RegisterPage {...props} user={user} />
                        }
                    }} />       
                        
            
            </Switch>
        
         </div>
         
     )
 }

 export default AppHooks