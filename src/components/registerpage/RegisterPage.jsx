import React from 'react'


export default function RegisterPage() {
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
