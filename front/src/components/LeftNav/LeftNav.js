import "./LeftNav.css";
import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import Loading from "../Loading/Loading";
import fetchData from "../../generic_functions/fetch";
var jwt = require('jsonwebtoken');


class LeftNav extends React.Component{
    state = {
        loading:true,
        user: null
    }

    async componentDidMount(){
        try{
            const decoded = jwt.verify(JSON.parse(sessionStorage.getItem("token")).token, "MY_KEY")
            let url_suffix = "/users/" + decoded.uid;
            
            let result = await fetchData(url_suffix, "GET");
            const retrieved_user = result.data;
            //Now I want to add user stores to the user object using
            //the similar things so that I can later load them if necessary

            //this url should now look like this: https://mediasell.herokuapp.com/api/users/user_id/stores
            //call api again but the updated endpoint! 
            result = await fetchData(url_suffix + "/stores", "GET"); 

            //attaching the stores to the user object!
            retrieved_user.stores = result.data;
            this.setState({loading:false, user:retrieved_user});
        }catch(err){
            //should probably have some code to take the user back to login here!
            if(err.message === "jwt expired"){
                alert("Your token has expired, please log in again!");
                sessionStorage.removeItem("token");
                window.location = "/login";
            }
            console.log(err.message);

        }
        

    }

    render(){
        if(this.state.loading || !this.state.user){
            return(
                <Loading />
            )
        }
        else{
            return(
                <div className="left-navbar">
                    <ProfileCard uid={this.state.user._id} username={this.state.user.username} full_name={this.state.user.full_name} profile_picutre="https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340"  stores={this.state.user.stores}/>
                </div>
            )
        }
        
    }
}

export default LeftNav;