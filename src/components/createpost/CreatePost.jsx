import React from 'react'
import './CreatePost.css'
export default function CreatePost(props) {
    return (
        <div className="container">
           <div className="row">
                   <h1>News Feed</h1>
            </div>
            <div className="create-post-container">
                <form className="create-post">
                <label for="post-content">Create a Post</label>
                <textarea id="post-content" name="post-content" placeholder="Write Something.."></textarea>
                <input type="submit" value="Submit Post" onSubmit={props.handleSubmit}></input>
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
