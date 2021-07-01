import React from "react";
import "./UserProfile.css";
import StoreCard from "../StoreCard/StoreCard";
var jwt = require('jsonwebtoken');


export default class UserProfile extends React.Component{

    state={
        loading:true,
        user:null
    }

    async componentDidMount(){
        try{
            const decoded = jwt.verify(JSON.parse(sessionStorage.getItem("token")).token, "MY_KEY")
            let url = "https://mediasell.herokuapp.com/api/users/"+decoded.uid;
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
            this.setState({loading:false, user:retrieved_user});
        }catch(err){
            console.log(err.message);
        }
        

    }

    render(){
        if(this.state.loading || !this.state.user){
            return(
                <div className="left-navbar">Loading...</div>
            )
        }
        return(
            <div className="user-profile">
                <div className="profile-header">
                    <div className="user-profile-picture">
                        <img src={this.state.user.profile_picture?this.state.user.profile_picture:"https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340"} alt="User"/>
                    </div>
                    <div className="user-profile-credentials">
                        <div className="user-profile-full-name">{this.state.user.full_name}</div>
                        <div className="user-profile-username">@{this.state.user.username}</div>
                        <div className="user-profile-contacts">
                            Contact Information:
                            <div className="user-profile-phone-number">Phone Number: {this.state.user.phone_nubmer}</div>
                            <div className="user-profile-email">Email: {this.state.user.email}</div>
                        </div>
                    </div>
                </div>
                <div className = "profile-stores-wrapper">
                    <div className="profile-stores-header">{"Stores"}</div>

                    <div className="profile-stores">
                        {this.state.user.stores.map(store => (
                            <StoreCard key={store._id} profile_picture={store.image} 
                            name={store.name} city={store.location.city} address={store.location.address}/>
                        ))}              
                    </div>
                </div>
            </div>
        )
    }
}