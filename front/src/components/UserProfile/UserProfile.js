import React, {useState, useEffect} from "react";
import "./UserProfile.css";
import StoreCard from "../StoreCard/StoreCard";
import Loading from "../Loading/Loading";
import CreateStore from "../CreateStore/CreateStore";
import { useParams } from "react-router-dom";
import fetchData from "../../generic_functions/fetch";
import { IconContext } from "react-icons/lib";
import {GiSmartphone} from "react-icons/gi"
import {HiOutlineMail} from "react-icons/hi"
import jwtDecode from "../../generic_functions/jwt-decode";

const useFetch = (id) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function getData(){
            let url_suffix = "/users/" + id;

            let result = await fetchData(url_suffix, "GET")
            let retrieved_user = result.data;
            //Now let's get the user's stores
            result = await fetchData(url_suffix + "/stores", "GET")
            //Attaching the store objects to the retrieved_user object
            retrieved_user.stores = result.data;
            console.log(retrieved_user);
            //setting the loading state to false and passing the retrieved user as user
            setUser(retrieved_user);
            setLoading(false);
        }
        getData();
    },[id])
    return {user, loading}
}

const checkOwnership = (id) => {
    const decoded = jwtDecode();
    if(decoded.uid === id){
        return true;
    }
    return false;
}


export default function UserProfile(){
    let {id} = useParams();
    const {user, loading} = useFetch(id);
    const [owner] = useState(checkOwnership(id));

    const onEditProfileClick = () =>{
        window.location = "/user/" + id + "/edit"
    }

    if(loading || !user){
        return(
            <Loading />
        )
    }
    
    return(
        <div className="user-profile">
            <div className="profile-header">
                <div className="user-profile-picture">
                    <img src={user.image?user.image:"https://image.flaticon.com/icons/png/512/3135/3135715.png"} alt="User"/>
                </div>
                <div className="user-profile-credentials">
                    <div className="user-profile-full-name">{user.full_name}</div>
                    <div className="user-profile-username">@{user.username}</div>
                    <div className="user-profile-contacts">
                        <IconContext.Provider value={{className:"icons"}}>
                            Contact Information:
                            <div className="user-profile-phone-number"><GiSmartphone /> {user.phone_number}</div>
                            <div className="user-profile-email"><HiOutlineMail /> {user.email}</div>
                            {owner?<button className="edit-profile-btn" onClick={onEditProfileClick}>Edit Profile</button>:null}
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
            {owner?<CreateStore />:null}
            <div className = "profile-stores-wrapper">
                <div className="profile-stores-header">{"Stores"}</div>

                <div className="profile-stores">
                    {user.stores.length===0?
                        <div className="empty-array-warning">This user hasn't registered any stores yet!</div>:
                        user.stores.map(store => (
                        <StoreCard key={store._id} store_id={store._id} profile_picture={store.image} 
                        name={store.name} city={store.location.city} address={store.location.address}/>
                    ))}              
                </div>
            </div>
        </div>
    )
    
}