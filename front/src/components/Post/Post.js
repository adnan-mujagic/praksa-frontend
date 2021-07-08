import React from "react";
import "./Post.css"
import buy from "./BuyFunction";



export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.onHeaderClick = this.onHeaderClick.bind(this);
        this.onBuyButtonClick = this.onBuyButtonClick.bind(this);
    }

    state = {
        quantity: this.props.quantity
    }

    async onBuyButtonClick(){
        if(this.state.quantity<=0){
            return;
        }
        buy(this.props.post_id, this.state.quantity)
        .then((res) => {
            const new_quantity = res.data.quantity;
            this.setState({quantity:new_quantity});
        })
    }

    onHeaderClick(){
        window.location = "/store/"+this.props.store_id;
    }


    render(){
        return(
            <div className="post">
                <div className="post-header" onClick={this.onHeaderClick}>
                    <div className="store-image">
                        <img src={this.props.profile_picture?this.props.profile_picture:"https://image.freepik.com/free-vector/convenience-store-isometric-shop-24-hour-isometric-design_201904-46.jpg"} alt="Store"/>
                    </div>
                    <div className="store-name">{this.props.store_name?this.props.store_name:"Anonymous Store"}</div>
                </div>
                <div className="post-content">
                    <div className="post-image">
                        <img
                            className="image"
                            src={this.props.product_picture}
                            alt="First slide"
                        />
                        
                    </div>
                    <div className="post-details">
                        <div className="product-name">{this.props.name}</div>
                        <div className="product-cost">US$ {this.props.cost}</div>
                        {this.props.quantity?
                            <div className="product-quantity"><b>Quantity: </b>{this.props.quantity}</div>
                            :
                            null
                        }
                        <div className="product-state"><b>State: </b>{this.props.state}</div>
                        <div className="product-description"><b>Description: </b>{this.props.description}</div>
                        
                        <button className="post-buy-btn" onClick={this.onBuyButtonClick}>Buy Item</button>
                    </div>
                </div>
            </div>
        )
    }
}