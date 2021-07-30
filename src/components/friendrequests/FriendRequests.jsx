
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import './FriendRequests.css'

export default function FriendRequests(props) {
    console.log(props.user.pendingRequests,'this is friend req')
    let friendNames = []
    
    const friendObject = () => {
        props.user.pendingRequests.map((id) => {
            axios.get(`http://localhost:5000/api/collections/user/${id}`) 
           .then ((value) => {
              console.log(value.data)
            }
           ) 
        })
    }
    {props.user.pendingRequests ?
    friendObject()
    : console.log('no pending request')
    }

    
    return (
        <div className="requests-container">
            <div className="requests-title">
                <h3 className="">Pending Friend Requests</h3> 
            </div>
            {props.user.pendingRequests ?
            props.user.pendingRequests.map((id) => (
            <div>
            <h5 className="requests">{id} sent you a friend Request!</h5>
            <button className="add-friend-button btn-primary" onClick={props.addFriend(id)} >Add Friend </button>
            <button className="deny-friend-button  btn-danger" onClick={props.deleteFriend(id)}>Delete Friend</button>
            </div>
            ))
            : <h5></h5>
            }
            
            
        </div>
    )
}
