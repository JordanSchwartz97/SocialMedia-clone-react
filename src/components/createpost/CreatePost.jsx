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
                console.log(response.data.post,'this is response data.')
                setIsLoading(false);
                }))
                

            }catch(error){
                console.log("error");
            }     
            }

             fetchData()
            }, [])
            const usertext = useFormInput('');
            const email = useFormInput('');
            const createNewPost = async() => {
                console.log(props.user.email,'user email')
                const newPost = { 
                    text: usertext.value,
                    
                    };
                    console.log(newPost,'this is new post')
        
                    console.log(newPost)
                    
              let response = await axios.post(`http://localhost:5000/api/collections/user/newPost/${props.user._id}`, newPost)  
            console.log(response,'this is response from getpost')
        }
            
    //<input type="text" {...username} autoComplete="new-username" />
    return (
        
        <div className="container">
                <div className="title-row">
                {console.log(data)}
                   <h1>News Feed</h1>
                </div>
            <div className="create-post-container">
                <label className="create-a-post">Create a Post</label>
                    <input type="text" className="create-post" {...usertext} autoComplete="new-text" />
                    <input type="submit-button" className="submit-button" onClick={ createNewPost} placeholder="Submit Post" />
                {/* <form className="create-post">
                <input type="" id="post-content" type="text" {...text}name="post-content" placeholder="Write Something.."></textarea>
                <input type="submit" onSubmit={createNewPost()} value="Submit Post"></input> */}
                {/* </form> */}
            </div>
            { !isLoading ?
            <div className="friend-post">       
                <div className="icon" img src="/assets/53283" alt="a picture of a soccer ball" class="rounded-circle" width='40' height='40'>
                    <h2>Posts</h2>
                    {data.map(item => console.log(item.text))}
                    {data.map((premise, j) => <p key={j}>{premise.text}{premise.dateAdded}</p>)}
                
                   
                </div>
           </div>
            : <h5>Posts are loading</h5>}
        </div>
    )
}
    
const useFormInput = initialValue => {
                const [value, setValue] = useState(initialValue);
              
                const handleChange = e => {
                  setValue(e.target.value);
                }
                return {
                  value,
                  onChange: handleChange
                }
              }
    