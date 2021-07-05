import "./LeftNav.css";
import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import Loading from "../Loading/Loading";
import fetchData from "../../generic_functions/fetch";
import jwtDecode from "../../generic_functions/jwt-decode";

class LeftNav extends React.Component{
    state = {
        loading:true,
        user: null
    }

    async componentDidMount(){
        
        const decoded = jwtDecode();
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
                    <ProfileCard uid={this.state.user._id} username={this.state.user.username} full_name={this.state.user.full_name} profile_picutre={this.state.user.image}  stores={this.state.user.stores}/>
                </div>
            )
        }
        
    }
}

export default LeftNav;