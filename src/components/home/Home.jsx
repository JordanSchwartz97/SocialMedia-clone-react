import React, {useState, useEffect} from 'react'
import CreatePost from '../createpost/CreatePost'
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import FriendRequests from '../friendrequests/FriendRequests';
import FriendsList from '../friendslist/FriendsList';
import ProfilePage from '../profile/profile';

const Home = () => {

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

   const addFriend = async () => {
       
       console.log( 'addfriend is running')
   }

   const deleteFriend = async () => {
       console.log('delete friend is running')
   }

   
   
   useEffect(() => {
       getUserData()
       console.log(user)
   },[])
   


    return (
        <div>
        {user && <CreatePost user={user}/>}
        {user && <FriendRequests user={user} addFriend={addFriend} deleteFriend={deleteFriend}/>}
        {user && <FriendsList user={user}/>}
        {!user && <div>user not set</div>}
        </div>
    )
}


export default Home