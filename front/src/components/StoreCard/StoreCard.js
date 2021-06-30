import "./StoreCard.css";

import React from "react";



export default class StoreCard extends React.Component{

    render(){
        return(
            <div className="store-card">
                <div className="store-card-picture">
                    <img src={this.props.profile_picture?this.props.profile_picture:"https://img.freepik.com/free-vector/people-standing-store-queue_23-2148594615.jpg?size=626&ext=jpg"} alt="Store"/>
                </div>
                <div className="store-card-details">
                    <div className="store-card-name">{this.props.name}</div>
                    <div className="store-card-location-city"> {this.props.city}</div>
                    <div className="store-card-location-address"> {this.props.address}</div>
                </div>
            </div>
        )
    }
}