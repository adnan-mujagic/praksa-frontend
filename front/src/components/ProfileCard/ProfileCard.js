import React from "react";
import "./ProfileCard.css";

export default class ProfileCard extends React.Component{
    constructor(props){
        super(props);

        this.onVisitProfile = this.onVisitProfile.bind(this);
    }

    onVisitProfile(){
        window.location = "/user/"+this.props.uid;
    }

    render(){
        return(
            
            <div className="profile-card">
                <div className="profile-card-top">
                    <div className="profile-card-img" onClick={this.onVisitProfile}>
                        <img src={this.props.profile_picutre} alt="User"/>
                    </div>
                    <div className="profile-card-credentials">
                        <div className="profile-card-full-name">{this.props.full_name}</div>
                        <div className="profile-card-username" onClick={this.onVisitProfile}>@{this.props.username}</div>
                    </div>
                </div>
                <div className="profile-card-other">
                    <div>
                        Stores owned: {this.props.stores.length}
                    </div>
                    <button className="profile-card-btn" onClick={this.onVisitProfile}>Visit Profile</button>
                </div>
            </div>
        )
    }
}

