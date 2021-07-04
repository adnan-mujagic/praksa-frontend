import "./StoreCard.css";

import React from "react";
import { IconContext } from "react-icons/lib";
import { BsMap} from "react-icons/bs"
import { HiOutlineLocationMarker } from "react-icons/hi"



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
                    <IconContext.Provider value={{className:"store-card-icon"}}>
                        <div className="store-card-name">{this.props.name}</div>
                        <div className="store-card-location-city"><BsMap /> {this.props.city}</div>
                        <div className="store-card-location-address"><HiOutlineLocationMarker /> {this.props.address}</div>
                    </IconContext.Provider>
                </div>
            </div>
        )
    }
}