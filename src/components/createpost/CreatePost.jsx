import React, {useState, useEffect} from 'react'
import './CreatePost.css'
import axios from 'axios';
import jwt_decode from 'jwt-decode';


export default function CreatePost(props) {
    //console.log(props.userData.listFriends)
    // props.userData.listFriends.map(friend => console.log(friend))

   //let friends = [];
    //props.userData.listFriends.map(friend => {friends.push(friend)})
   //console.log(friends);
  /*
    const jwt = localStorage.getItem('token');
    let decoded = '';
   try{
       decoded = jwt_decode(jwt);
       
   } catch(ex) {
      console.log(ex); 
   } 
   */


    /*const getFriendPosts = async () => {
        props.userData.listFriends.map(friend => {
            await axios.get(`http://localhost:5000/api/collections/user/${friend}`)
            .then((response) => {
                console.log(response.data)
            })
       //await axios.get(`http://localhost:5000/api/collections/user/${decoded._id}`)
       //.then((value) => {
       //setUser(value.data)
       //console.log(value.data)
       //})

   //getFriendPosts();*/
    console.log(props.user,'this is createpost')







 let allPosts = [];
    
    return (
        
        <div className="container">
                <div className="title-row">
                   <h1>News Feed</h1>
                </div>
            <div className="create-post-container">
                <label className="create-a-post">Create a Post</label>
                <form className="create-post">
                
                <textarea id="post-content" name="post-content" placeholder="Write Something.."></textarea>
                <input type="submit" value="Submit Post"></input>
                </form>
            </div>
            <div className="post">       
                <div className="icon" img src="/assets/53283" alt="a picture of a soccer ball" class="rounded-circle" width='40' height='40'>
                    <h2>{props.user.name}</h2>
                    <h4>My Posts</h4>
                </div>
           </div>
        </div>
    )
}
    

    