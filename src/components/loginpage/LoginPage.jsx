
import React, { useState,useEffect } from 'react';
import './LoginPage.css'
import axios from 'axios';


function LoginPage(props) {
    const useremail = useFormInput('');
    const userpassword = useFormInput('');
    const [Auth, setAuth] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    //http://localhost:5000/api/auth/login/

    const login = async() => {
        const credentials = { email: useremail.value,
                              password: userpassword.value };

        const response = await axios.post("http://localhost:5000/api/auth/login/", credentials);
        console.log(response.headers['x-auth-token'])

        localStorage.setItem('token', response.headers['x-auth-token']);
       const tokenFromStorage = localStorage.getItem('token') ;
        console.log("t from",tokenFromStorage);
       
        if(tokenFromStorage != null ){
            console.log("is not nul", tokenFromStorage)
           setAuth(true);
        }
        
        /*axios.post("http://localhost:5000/api/auth/login/", credentials).then(function (response) {
            console.log(response.headers)
        })
        .catch(function (error) {
            console.log(error)
        })*/


    }
    
   /* const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/Customer/SignUp', customerSignUp)
          .then(function (response) {
              console.log(response)
          })
          .catch(function (error) {
              console.log(error)
          }) 
*/


/*useEffect(() => {
        const credentials = { email: useremail.value,
        password: userpassword.value };

        const response =  axios.post("http://localhost:5000/api/auth/login/", credentials);
        console.log(response.headers['x-auth-token'])

        localStorage.setItem('token', response.headers['x-auth-token']);
        const tokenFromStorage = localStorage.getItem('token') ;
        console.log("t from",tokenFromStorage);
        if(tokenFromStorage != null ){
            console.log("is not nul", tokenFromStorage)
            setAuth(true);
        }
    return () => {
      // Clean up the subscription
      handleLogin();
    };
  });
*/

    // handle button click of login form
    const handleLogin =  () => {
         login();
        
         

        console.log(Auth)
    //let token = localStorage.getItem('x-auth-token');
    //alert(token);
      if (Auth){
      props.history.push('/profile');
      }
      else {
          alert("failed login! try again")
          props.history.push('/');

      }
    }
  
    return (
      <div>
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
        <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
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

