import React, {useState} from "react";
import "./Login.css"
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('https://mediasell.herokuapp.com/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function Login({setToken}){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await loginUser({
          username,
          password
        });
        console.log(data);
        setToken(data);
    }
    return(
        <div className="login">
            <h1>Hello, please sign in in the form below!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" placeholder="Username..." onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" placeholder="Password..." onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button className="login-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
    
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}