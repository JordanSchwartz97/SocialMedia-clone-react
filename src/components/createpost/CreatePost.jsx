import React, {useState} from 'react'
import jwt_decode from 'jwt-decode';
import './CreatePost.css'
import axios from 'axios';

export default function CreatePost() {

    let [user, setUser] = useState({});

     const jwt = localStorage.getItem('token');
     let decoded = '';
    try{
        decoded = jwt_decode(jwt);
        
    } catch(ex) {
       console.log(ex); 
    } 

    const getUserData = async () => {
        const response = await axios.get(`http://localhost:5000/api/collections/user/${decoded._id}`)
        console.log(response);
        if (response != null){
            return response
        }
        else{
            console.log('No response from api')
        }
        

    }
    let response = getUserData()
    console.log(response)
    // getUserData();
    

    return (
        <div className="container">
           <div className="row">
                   <h1>News Feed</h1>
            </div>
            <div className="create-post-container">
                <form className="create-post">
                <label  for="post-content">Create a Post</label>
                <textarea id="post-content" name="post-content" placeholder="Write Something.."></textarea>
                <input type="submit" value="Submit Post"></input>
                </form>
            </div>
            <div className="post">       
                <div className="icon" img src="/assets/53283" alt="a picture of a soccer ball" class="rounded-circle" width='40' height='40'>
                    <h4>John Doe</h4>
                    <p>Random Post Text Here Random Post Text Here Random Post Text Here Random Post Text Here Random Post Text Here Random Post Text Here Random Post Text Here Random Post Text Here Random Post Text Here  </p>
                </div>
           </div>
        </div>
    )
}
    

    