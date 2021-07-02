import React from "react";
import "./Post.css"



export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.onHeaderClick = this.onHeaderClick.bind(this);
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
                        <div className="product-state">State: {this.props.state}</div>
                        <div className="product-description">Description: {this.props.description}</div>

                        <button className="post-buy-btn">Buy Item</button>
                    </div>
                </div>
            </div>
        )
    }
}