import React from 'react'
import './FriendsList.css'
export default function FriendsList(props) {
    return (
        <div className="friends-container">
            <div className="friends-title">
                <h3 className="">Friends List</h3> 
            </div>
            {props.user.listFriends ?
            props.user.listFriends.map((name) => (
            <div>
            <h5 className="friends">{name}</h5>
            <button className="remove-friend-button btn-danger" >Delete Friend</button>
            </div>
            ))
            : <h5></h5>
            }
        </div>
    )
}
