import React from 'react';
import Navbar from './navbar/Navbar';
import CreatePost from './createpost/CreatePost';
import axios from 'axios';
 const AppHooks = () => {

    const getPosts = async () => {
            const getPosts = await axios.get(`http://localhost:5000/api/collections/allPosts`)
            console.log("this is getPosts")
        
    }


    function handleSubmit(event){
        event.preventDefault();
        getPosts();

    }






     return(
         <>
         <div>
             <Navbar/>
            <CreatePost/>
         </div>
         </>
     )
 }

 export default AppHooks