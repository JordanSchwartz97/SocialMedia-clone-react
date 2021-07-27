import React from 'react';
import NavBar from './navbar/Navbar';
import ProfilePage from './profile/profile';


 const AppHooks = () => {
     return(
         <>
         <div>
            <ProfilePage/>
             <h1>Hello World, where's the Nav bar???</h1>
            <NavBar />
         </div>
         </>
     )
 }

 export default AppHooks