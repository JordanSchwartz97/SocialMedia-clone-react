import React from 'react';
import Navbar from './navbar/Navbar';
//import ProfilePage from './profile/profile';
import RegisterPage from './registerpage/RegisterPage';


 const AppHooks = () => {
     return(
         <>
         <div>
             <Navbar/>
             <RegisterPage/>
         </div>;
         

         
         </>
     )
 }

 export default AppHooks