import React from "react";
import "./StorePostOverlay.css";

export default class StoreProfileOverlay extends React.Component{
    render (){
        return(
            <div className="store-post-overlay">
                <div className="store-post-overlay-name">{this.props.details.name}</div>
                <div className="store-post-overlay-cost"><b>Cost: </b>{this.props.details.cost}</div>
                <div className="store-post-overlay-state"><b>State: </b>{this.props.details.state}</div>
                <div className="store-post-overlay-quantity"><b>Quantity: </b>{this.props.details.quantity}</div>
                <div className="store-post-overlay-description"><b>Description: </b>{this.props.details.description}</div>
                <button>Buy</button>
            </div>
        )
    }

}