import React from 'react';
import './profile.css'
import NavBar from '../navbar/Navbar';
import logo from './avatar.png'

export default function ProfilePage(props) {
    console.log(props.userData)
    return (
        <>
       
        {props.userData ?
        <div>

       
    
        <div className="profilePage">
            <h1 className="Users-Name">{props.userData.name}</h1>
            <img className="profile-image"src={logo} alt="profile-pic" width="300" height="300" border-radius="50%"></img>
            <h2 className="bio">{props.userData.aboutMe}</h2>
        <div className="form">
            <h5 className="name">Name</h5>
            
            <h5 className="email" onSubmit="">Email</h5>

        </div>
        </div>
        </div>
        :<h3>No User Data</h3>
        }
        </>
    )
}



