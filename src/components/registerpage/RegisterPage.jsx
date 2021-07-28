import React from 'react'
import './RegisterPage.css'

export default function RegisterPage() {
        return(
            <form className='create-form' >
                <div className='input-box'>
                    <label htmlFor='name'>Name</label>
                    <input 
                        name='name'
                        placeholder='name' 
                    />
                    </div>
                <div  className='input-box'>
                    <label htmlFor='email'>Email</label>
                    <input
                    name='email' 
                    placeholder='email' 
                    />
                </div>
                <div>
                    <label htmlFor='email'>Password</label>
                    <input
                    name='password' 
                    placeholder='password' 
                    />
                </div>
                <br/>
                <div>
                    <button>Register</button>
                </div>
            </form>
        );
    }

