import React from 'react'
import './RegisterPage.css'


export default function RegisterPage() {
<<<<<<< HEAD
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

=======
    return (
        <>
            <form>
                <div >
                <label for="post-content">Create a Post</label>
                    <input type="name"  id="post-content" placeholder="name"/>
                </div>
                <div >
                    <label >Email address</label>
                    <input type="email"  id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" >We'll never share your email with anyone!</small>
                </div>
                <div>
                    <label >Password</label>
                    <input type="password"  id="exampleInputPassword" placeholder="password"/>
                </div>
            </form>
        </>
    )
}
>>>>>>> 63ed5bf7b4bb7b010d48fa9830750658b43119a7
