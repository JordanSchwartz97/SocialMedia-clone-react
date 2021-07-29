import React from 'react'
import './FriendRequests.css'

export default function FriendRequests(props) {
    console.log(props.userData.pendingRequests,'this is friend req') 
    return (
        <div className="requests-container">
            <div className="requests-title">
                <h3 className="">Pending Friend Requests</h3> 
            </div>
            <h5 className="requests">{props.userData.pendingRequests} sent you a friend Request!</h5> 
            <button className="add-friend-button btn-primary" onClick=''>Add Friend </button>
            <button className="deny-friend-button  btn-danger">Delete Friend</button>
        </div>
    )
}
