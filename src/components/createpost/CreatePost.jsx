import React, {useState, useEffect} from 'react'
import './CreatePost.css'
import axios from 'axios';
import jwt_decode from 'jwt-decode';


export default function CreatePost(props) {

    
    const jwt = localStorage.getItem('token');
   
   // if(!jwt) 
    //return "no valid token";

    let decoded = '';
   try{
       decoded = jwt_decode(jwt);
       
   } catch(ex) {
      console.log(ex); 
   } 


    let allPosts=[{}]
    async function getFriendsId () {
        try{
            
        let friendsArray = []
        let response = await axios.get(`http://localhost:5000/api/collections/user/${decoded._id}`)
        const json = await response.data; 
        console.log(json)
        await json.listFriends.map((friend ) => friendsArray.push(friend))

        return friendsArray
       
        }catch(error){
            console.log(error)
        }
    }
   
   let everyonePost = []
  
   //get rid of getFriendPost() *not being used, function is implemented in useEffect() hooks*
    const getFriendsPost = async() =>{
        const friendsArray = await getFriendsId()
        console.log("friendsPost func called", friendsArray)
         const allPosts=[]  
        try{
            await friendsArray.map( (friendId) => 
            axios.get(`http://localhost:5000/api/collections/user/${friendId}`).then(response => {
            allPosts.push(response.data.post)
            everyonePost.push(response.data)
            }))
            console.log(allPosts)
            return allPosts;
        
            
           
        }catch(error){
            console.log("error");
        } 
    }
    const [ isLoading, setIsLoading ] = useState(false)
    const [ data, setData ] = useState([])
  
    useEffect(() => {
           async function fetchData() {
               setIsLoading(true)
               const friendsArray = await getFriendsId()
               try{
                await friendsArray.map( (friendId) => 
                axios.get(`http://localhost:5000/api/collections/user/${friendId}`).then(response => {       
                setData(response.data.post)
                setIsLoading(false);
                }))
                console.log(data)

            }catch(error){
                console.log("error");
            }     
            }

             fetchData()
            }, [])

 
    
    return (
        
        <div className="container">
                <div className="title-row">
                {console.log(data)}
                   <h1>News Feed</h1>
                </div>
            <div className="create-post-container">
                <label className="create-a-post">Create a Post</label>
                <form className="create-post">
                
                <textarea id="post-content" name="post-content" placeholder="Write Something.."></textarea>
                <input type="submit" value="Submit Post"></input>
                </form>
            </div>
            { !isLoading ?
            <div className="post">       
                <div className="icon" img src="/assets/53283" alt="a picture of a soccer ball" class="rounded-circle" width='40' height='40'>
                    <h2>Stories</h2>
                    {data.map(item => console.log(item.text))}
                    {data.map((premise, j) => <p key={j}>{premise.text}</p>)}
                   
                </div>
           </div>
            : <h5>Posts are loading</h5>}
        </div>
    )
}
    

    