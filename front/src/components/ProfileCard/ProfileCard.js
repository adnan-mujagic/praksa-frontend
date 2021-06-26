import React from "react";
import "./ProfileCard.css";


export default class ProfileCard extends React.Component{
    


    render(){
        return(
            <div className="profile-card">
                <div className="profile-card-top">
                    <div className="profile-card-img">
                        <img src={this.props.profile_picutre} alt="User"/>
                    </div>
                    <div className="profile-card-credentials">
                        <div className="profile-card-full-name">{this.props.full_name}</div>
                        <div className="profile-card-username">@{this.props.username}</div>
                    </div>
                </div>
                <div className="profile-card-other">
                    Stores owned: {this.props.stores.length}
                </div>
            </div>
        )
    }
}

