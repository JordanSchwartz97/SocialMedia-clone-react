
import React, { useState,useEffect } from 'react';
import './LoginPage.css'
import axios from 'axios';


function LoginPage(props) {
    const useremail = useFormInput('');
    const userpassword = useFormInput('');
    const [Auth, setAuth] = useState(false);
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    /*useEffect(() => {
        console.log("useEffect caled");
        const credentials = { email: useremail.value,
            password: userpassword.value };
            axios.post("http://localhost:5000/api/auth/login/", credentials)
            .then(response => setToken(response.headers['x-auth-token'])
    )}, [token]);*/

    //http://localhost:5000/api/auth/login/

    const login = async() => {
        const credentials = { email: useremail.value,
                              password: userpassword.value };

        const response =  await axios.post("http://localhost:5000/api/auth/login/", credentials);
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
                props.history.push('/');
            }
      }, [token]);

    // handle button click of login form
    const handleLogin =  () => {    
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

  
  
    return (
      <div className='input-div'>
        Login<br /><br />
        <div>
          Email<br />
          <input type="text" {...useremail} autoComplete="new-email" />
        </div>
        <div style={{ marginTop: 10 }}>
          Password<br />
          <input type="password" {...userpassword} autoComplete="new-password" />
        </div>
        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
        
            <input type="button" className="leftButton" value={loading ? 'Loading...' : 'Login'} onClick={ login} disabled={loading} /> 
            <input type="button" className="rightButton" value={loading ? 'Loading...' : 'Register'} onClick={ login} disabled={loading} /><br />
      
      </div>
    );
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
  
  export default LoginPage;

