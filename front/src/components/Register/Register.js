import "./Register.css";
import { IconContext } from "react-icons/lib";
import {IoWarningOutline} from "react-icons/io5"
import { useState } from "react";
import fetchData from "../../generic_functions/fetch";

export default function Register(props){
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [image, setImage] = useState("");

    const [warningExists, setWarningExists] = useState(false);
    const [warningMessage, setWarningMessage] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const result = await fetchData("/users", "POST", {
            full_name:fullName,
            username,
            password,
            email,
            phone_number:phoneNumber,
            image
        });

        if(result.data){
            const response = await fetchData("/users/login", "POST", {
                username,
                password
            });

            props.setToken(response);
        }

        else{
            setWarningMessage(result.status);
            setWarningExists(true);
        }
    }

    return(
        <div className="register">
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <h2>Please register in the form below!</h2>
                    {
                        warningExists?
                        <IconContext.Provider value={{className:"login-warning-icon"}}>
                            <div className="warning-wrapper"><IoWarningOutline /> {warningMessage}</div>
                        </IconContext.Provider>
                        :
                        null
                    }
                    <label>
                        <p>Full Name</p>
                        <input type="text" required placeholder="Full name..." onChange={e => setFullName(e.target.value)}/>
                    </label>
                    <label>
                        <p>Username</p>
                        <input type="text" required placeholder="Username..." onChange={e => setUsername(e.target.value)} min="3"/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" required placeholder="Password..." onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <label>
                        <p>Email</p>
                        <input type="text" required placeholder="Email..." onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <p>Phone Number</p>
                        <input type="number" required placeholder="Phone number..." onChange={e => setPhoneNumber(e.target.value)}/>
                    </label>
                    <label>
                        <p>Profile Picture</p>
                        <input type="text" placeholder="Image URL" onChange={e => setImage(e.target.value)}/>
                    </label>
                    <button type="submit">Register</button>
                    <button onClick={props.onSwitch}>{props.textToShow}</button>
                </form>
            
            </div>
            
        </div>
    )
}