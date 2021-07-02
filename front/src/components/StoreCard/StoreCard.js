import "./StoreCard.css";

import React from "react";



export default class StoreCard extends React.Component{

    constructor(props){
        super(props);
        this.onStoreClick = this.onStoreClick.bind(this);
    }

    onStoreClick(){
        console.log(this.props.store_id);
        window.location = "/store/"+this.props.store_id;
    }

    render(){
        return(
            <div className="store-card" onClick={this.onStoreClick}>
                <div className="store-card-picture">
                    <img src={this.props.profile_picture?this.props.profile_picture:"https://image.freepik.com/free-vector/convenience-store-isometric-shop-24-hour-isometric-design_201904-46.jpg"} alt="Store"/>
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