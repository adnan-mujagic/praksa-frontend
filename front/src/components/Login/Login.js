import React, {useState} from "react";
import "./Login.css"
import { IconContext } from "react-icons/lib";
import {IoWarningOutline} from "react-icons/io5"
import PropTypes from 'prop-types';
import Register from "../Register/Register";
import fetchData from "./../../generic_functions/fetch"

async function loginUser(credentials) {
    return fetchData("/users/login", "POST", credentials);
}

export default function Login({setToken}){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [warningExists, setWarningExists] = useState(false);
    const [warningMessage, setWarningMessage] = useState("");

    const [showRegister, setShowRegister] = useState(false)

    const [textToShow, setTextToShow] = useState("Want to register?")

    const onSwitchToButtonClick = () =>{
        setShowRegister(!showRegister);
        setWarningExists(false);
        showRegister?setTextToShow("Want to register?"):setTextToShow("Already have an accout?");
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await loginUser({
          username,
          password
        });
        if(data.token){
            setToken(data);
        }
        else{
            setWarningExists(true);
            setWarningMessage(data.status);
        }
    }

    if(showRegister){
        return(
            <Register onSwitch={onSwitchToButtonClick} textToShow={textToShow} setToken = {setToken}/>
        )
    }
    return(
        <div className="login">
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <h2>Hello, please sign in in the form below!</h2>
                    {
                        warningExists?
                        <IconContext.Provider value={{className:"login-warning-icon"}}>
                            <div className="warning-wrapper"><IoWarningOutline /> {warningMessage}</div>
                        </IconContext.Provider>
                        :
                        null
                    }
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
                        <button onClick={onSwitchToButtonClick}>{textToShow}</button>
                    </div>
                </form>
            </div>
        </div>
    )
    
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}