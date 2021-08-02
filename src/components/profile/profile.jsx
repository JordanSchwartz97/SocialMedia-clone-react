import React from 'react';
import './profile.css'
import NavBar from '../navbar/Navbar';
import logo from './avatar.png'

export default function ProfilePage(props) {
    console.log(props.user)
    return (
        <>
       
        {props.user ?
        

       
        <div className="profile-page">
            <div className="profile-container">
                <h1 className="Users-Name">{props.user.name}</h1>
                <img className="profile-image"src={logo} alt="profile-pic" width="300" height="300" border-radius="50%"></img>
                <h2 className="bio">{props.user.aboutMe}</h2>
            </div>
            <div className="form-container">
                <label className="about-me-content">About Me</label>
                <textarea className="create-about-me"/>
                <input className="submit-about-button" type="button" value="Submit Post"  />
            </div>
        
        </div>
        
        
        :<h3>No User Data</h3>
        }
        </>
    )
}



