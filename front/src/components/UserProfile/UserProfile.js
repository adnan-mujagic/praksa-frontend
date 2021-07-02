import React, {useState, useEffect} from "react";
import "./UserProfile.css";
import StoreCard from "../StoreCard/StoreCard";
import { useParams } from "react-router-dom";

const useFetch = (params) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function fetchData(){
            let url = "https://mediasell.herokuapp.com/api/users/"+params.id;
            let response = await fetch(url);
            let result = await response.json();
            let retrieved_user = result.data;
            //Now let's get the user's stores
            url+="/stores";
            response = await fetch(url);
            //Attaching the store objects to the retrieved_user object
            result = await response.json();
            retrieved_user.stores = result.data;
            console.log(retrieved_user);
            //setting the loading state to false and passing the retrieved user as user
            setUser(retrieved_user);
            setLoading(false);
        }
        fetchData();
    },[])
    return {user, loading}
}


export default function UserProfile(){
    let id = useParams();
    const {user, loading} = useFetch(id);
    

    if(loading || !user){
        return(
            <div>Loading...</div>
        )
    }
    
    return(
        <div className="user-profile">
            <div className="profile-header">
                <div className="user-profile-picture">
                    <img src={user.profile_picture?user.profile_picture:"https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340"} alt="User"/>
                </div>
                <div className="user-profile-credentials">
                    <div className="user-profile-full-name">{user.full_name}</div>
                    <div className="user-profile-username">@{user.username}</div>
                    <div className="user-profile-contacts">
                        Contact Information:
                        <div className="user-profile-phone-number">Phone Number: {user.phone_nubmer}</div>
                        <div className="user-profile-email">Email: {user.email}</div>
                    </div>
                </div>
            </div>
            <div className = "profile-stores-wrapper">
                <div className="profile-stores-header">{"Stores"}</div>

                <div className="profile-stores">
                    {user.stores.map(store => (
                        <StoreCard key={store._id} store_id={store._id} profile_picture={store.image} 
                        name={store.name} city={store.location.city} address={store.location.address}/>
                    ))}              
                </div>
            </div>
        </div>
    )
    
}