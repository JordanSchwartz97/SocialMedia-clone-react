import React, {useState} from 'react'
import './CreatePost.css'
import axios from 'axios';
import userEvent from '@testing-library/user-event';

export default function CreatePost(props) {
    console.log(props.userData,'this is createpost')

 let allPosts = [];
    
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
                    <h2>{props.userData.name}</h2>
                    <h4>My Posts</h4>
                </div>
           </div>
        </div>
    )
}
    

    