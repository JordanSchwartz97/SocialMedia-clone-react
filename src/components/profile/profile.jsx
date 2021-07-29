import React from 'react';
import './profile.css'
import NavBar from '../navbar/Navbar';
import logo from './avatar.png'

export default function ProfilePage(props) {
    console.log(props.userData)
    return (
        <>
        <div className="NavBar">
        </div>
        
        <div className="profilePage">
            <h1 className="Users-Name">Users Name</h1>
            <img className="profile-image"src={logo} alt="profile-pic" width="300" height="300" border-radius="50%"></img>
            <h2 className="bio">User Bio</h2>
        <div className="form">
            <h5 className="name">{props.userData}</h5>
            
            <h5 className="email">Email</h5>

        </div>
        </div>
        </>
    )
}



