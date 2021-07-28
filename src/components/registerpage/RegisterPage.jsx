import React from 'react'

export default function RegisterPage() {
    return (
        <form>
            <label for="firstname">Name: </label>
            <input type="text" name="name"></input><br></br>
            <label for="email">Email: </label>
            <input type="text" name="email"></input><br></br>
            <label for="password">Password: </label>
            <input type="text" name="password"></input><br></br>
            <button>Submit</button>
        </form>
    )
}
