import React from 'react'
import './RegisterPage.css'


export default function RegisterPage() {
    return (
        <>
            <form className='input-div'>
                <div className="input-div">
                <div className='register-div'>
                <label for="name">Name</label>
                    <input type="name"  id="post-content" placeholder=""/>
                </div>
                <div >
                    <label >Email address</label>
                    <input type="email"  id="exampleInputEmail"  placeholder=""/>
                </div>
                <div>
                    <label >Password</label>
                    <input type="password"  id="exampleInputPassword" placeholder=""/>
                </div>

                <div className='submit-button'>
                     <button>Submit</button>
                </div>
                </div>
            </form>
        </>
    )
}
