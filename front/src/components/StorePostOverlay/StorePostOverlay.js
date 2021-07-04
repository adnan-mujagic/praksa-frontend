import React from "react";
import "./StorePostOverlay.css";
import buyFunction from "../Post/BuyFunction";

export default class StorePostOverlay extends React.Component{
    constructor(props){
        super(props);
        this.onBuy = this.onBuy.bind(this);
    }

    state = {
        quantity: this.props.details.quantity
    }

    async onBuy() {
        buyFunction(this.props.details._id, this.state.quantity);
        this.setState({quantity:this.state.quantity-1});
    }

    render (){
        return(
            <div className="store-post-overlay">
                <div className="store-post-overlay-name">{this.props.details.name}</div>
                <div className="store-post-overlay-cost"><b>Cost: </b>{this.props.details.cost}</div>
                <div className="store-post-overlay-state"><b>State: </b>{this.props.details.state}</div>
                <div className="store-post-overlay-quantity"><b>Quantity: </b>{this.state.quantity}</div>
                <div className="store-post-overlay-description"><b>Description: </b>{this.props.details.description}</div>
                {this.props.removable?<button>Remove</button>:<button onClick={this.onBuy}>Buy</button>}
            </div>
        )
    }

}