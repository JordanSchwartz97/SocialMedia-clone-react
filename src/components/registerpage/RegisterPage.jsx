import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './RegisterPage.css'


export default function RegisterPage(props) {
    const username = useFormInput('');
    const useremail = useFormInput('');
    const userpassword = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const [Auth, setAuth] = useState(false);
    const [token, setToken] = useState(null);
    
    const register = async() => {
        const newUser = { 
            name: username.value,    
            email: useremail.value,
            password: userpassword.value };

            console.log(newUser)

        const response =  await axios.post("http://localhost:5000/api/collections/register", newUser);
        //console.log("x-auth-token",response.headers['x-auth-token'])

        localStorage.setItem('token', response.headers['x-auth-token']);
        const tokenFromStorage = localStorage.getItem('token') ;

        setToken(tokenFromStorage);
        if(token != null ){
            console.log("token is not nul", token)
           setAuth(true);
        }    
  
    }

    useEffect(() => {
     
        console.log("useEffect")
      
        
        if (token ){
            console.log("history push")
            props.history.push('/home');
            }
            else {
                console.log("failed")
               //alert("failed login! try again")
                props.history.push('/register');
            }
      }, [token]);

    // handle button click of login form
    /* const handleLogin =  () => {    
         login();      
        console.log("token in handleLogin()",token);
        
      if (Auth ){
      props.history.push('/profile');
      }
      else {
          alert("failed login! try again")
          props.history.push('/');
      }
    }
 */
  
  
    
    return (
        <>
            <form className='input-div'>
                <div className="input-div">
                <div className='register-div'>
                <label for="name">Name</label>
                <input type="text" {...username} autoComplete="new-username" />
                </div>
                <div >
                    <label >Email address</label>
                    <input type="text" {...useremail} autoComplete="new-email" />
                </div>
                <div>
                    <label >Password</label>
                    <input type="text" {...userpassword} autoComplete="new-password" />
                </div>

                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
        
            <input type="button" className="submit-button" value={loading ? 'Loading...' : 'Register'} onClick={ register} disabled={loading} /> 
           

               
                </div>
            </form>
        </>
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
