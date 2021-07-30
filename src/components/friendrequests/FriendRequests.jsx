
import React, {useState, useEffect} from 'react'
import './FriendRequests.css'

export default function FriendRequests(props) {
    console.log(props.user.pendingRequests,'this is friend req') 
    
    return (
        <div className="requests-container">
            <div className="requests-title">
                <h3 className="">Pending Friend Requests</h3> 
            </div>
            {props.user.pendingRequests ?
            props.user.pendingRequests.map((id) => (
            <div>
            <h5 className="requests">{id} sent you a friend Request!</h5>
            <button className="add-friend-button btn-primary" onClick={props.addFriend} >Add Friend </button>
            <button className="deny-friend-button  btn-danger" onClick={props.deleteFriend}>Delete Friend</button>
            </div>
            ))
            : <h5></h5>
            }
            
            
        </div>
    )
}
