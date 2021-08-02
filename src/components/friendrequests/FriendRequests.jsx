
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import './FriendRequests.css'

export default function FriendRequests(props) {

   // let [friendNames, setFriendNames] = useState([]);
    let friendNames = [];
    let [friends, setFriends] = useState(false);

    console.log(props.user.pendingRequests,'this is friend req')
//    {props.user.pendingRequests ?
//     friendObject()
//     : console.log('no pending request')
//     }


   /*  useEffect(()=>{
         friendObject()
    },[props.user.pendingRequests]) */
    
   function friendObject() {
        props.user.pendingRequests.map((id) => {
            axios.get(`http://localhost:5000/api/collections/user/${id}`) 
           .then ((value) => {
              
           friendNames.push({email: value.data.email, name: value.data.name, id: id})
              
            }
           ) 
        })
        //setFriendNames(test)
        //console.log(friendNames, 'this is friend names')
    }
    /*
    {props.user.pendingRequests ?
    friendObject()
    
    : console.log("no pending requests")
    }
    console.log("friendNames",friendNames)
    
    */


    return (
        <div className="requests-container">
            <div className="requests-title">
                <h3 className="">Pending Friend Requests</h3> 
            </div>
           
            {(friendNames.length > 0 )?
            friendNames.map((item) => (
            <div>
            <h5 className="requests">{item.name} sent you a friend Request!</h5>
            <button className="add-friend-button btn-primary"  >Add Friend </button>
            <button className="deny-friend-button  btn-danger" >Delete Friend</button>
            </div>
            )):console.log("nothing")}
           
            
            
            
        </div>
    )
}
// onClick={props.deleteFriend()}