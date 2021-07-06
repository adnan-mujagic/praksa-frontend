import "./EditProfile.css"
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import jwtDecode from "../../generic_functions/jwt-decode";
import fetchData from "../../generic_functions/fetch";
import Loading from "../Loading/Loading";
import { IconContext } from "react-icons/lib";
import {IoWarningOutline} from "react-icons/io5"

function checkOwnership(id) {
    const decoded = jwtDecode();
    if(decoded.uid === id){
        return true;
    }
    return false;
}

const useFetchUser = (id) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [image, setImage] = useState("");

    useEffect(() =>{
        async function getData(){
            const response = await fetchData("/users/" + id, "GET");
            console.log(response.data);
            setUser(response.data);
            setLoading(false);
            setImage(response.data.image);
            setFullName(response.data.full_name);
            setUsername(response.data.username);
            setPassword(response.data.password);
            setEmail(response.data.email);
            setPhoneNumber(response.data.phone_number);
        }
        getData();
    },[id])

    return({
        user,
        loading, 
        image, setImage, 
        fullName, setFullName, 
        username, setUsername, 
        password, setPassword, 
        email, setEmail,
        phoneNumber, setPhoneNumber
    })
}

export default function EditProfile(props){
    const {id} = useParams();
    const {
        user, loading,
        image, setImage, 
        fullName, setFullName, 
        username, setUsername, 
        password, setPassword, 
        email, setEmail,
        phoneNumber, setPhoneNumber
    } = useFetchUser(id);
    

    const [owner, setOwner] = useState(false);

    useEffect(()=>{
        setOwner(checkOwnership(id));
    },[id])
    
    const update = async () => {
        const data = await fetchData("/users/" + id, "PUT", {
            image,
            full_name:fullName,
            username,
            password,
            email,
            phone_number:phoneNumber
        });
        alert(data.status) 
    }

    const onBackToProfile = () => {
        window.location = "/user/" + id;
    }

    if(!owner){
        return(
            <IconContext.Provider value={{className:"warning-icon"}}>
                <div className="invalid-user-warning">
                    <IoWarningOutline />
                    You cannot edit this account!
                </div>
            </IconContext.Provider>
        )
    }

    if(loading){
        return(
            <Loading />
        )
    }

    return(
        <div className="edit-profile">
            <div className="picture-changer">
                <div className="picture-changer-image-container">
                    <img alt="Profile pic" src={user.image}/>
                </div>
            </div>
            
            <div className="edit-other-information">
                <label>
                    <p>Image URL</p>
                    <input type="text" placeholder="Enter image url..." value={image} onChange={e => setImage(e.target.value)}/>
                </label>
                <label>
                    <p>Full Name</p>
                    <input type="text" required placeholder="Full name..." value={fullName} onChange={e => setFullName(e.target.value)}/>
                </label>
                <label>
                    <p>Username</p>
                    <input type="text" required placeholder="Username..." value={username} onChange={e => setUsername(e.target.value)} min="3"/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" required placeholder="Password..." value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" required placeholder="Email..." value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Phone Number</p>
                    <input type="text" required placeholder="Phone number..." value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                </label>
                <div className="form-btns">
                    <button onClick={update}>Update</button>
                    <button onClick={onBackToProfile}>Back To Profile</button>
                </div>
                
            </div>
        </div>
    )
}