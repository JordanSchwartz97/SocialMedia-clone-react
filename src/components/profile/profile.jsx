import React from 'react';
import './profile.css'
import NavBar from '../navbar/Navbar';
import logo from './avatar.png'

export default function ProfilePage() {
    return (
        <>
        <div className="NavBar">
            <NavBar />
        </div>
        
        <div className="profilePage">
            <h1 className="Users-Name">Users Name</h1>
            <img className="profile-image"src={logo} alt="profile-pic" width="300" height="300" border-radius="50%"></img>
            <h2 className="bio">User Bio</h2>
        <div className="form">
            <h5 className="firstname">First Name</h5>
            <h5 className="lastname">Last Name</h5>
            <h5 className="email">Email</h5>

        </div>
        </div>
        </>
    )
}



