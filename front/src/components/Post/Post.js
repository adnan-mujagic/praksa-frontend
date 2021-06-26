import React from "react";
import "./Post.css"



export default class Post extends React.Component{


    render(){
        return(
            <div className="post">
                <div className="post-header">
                    <div className="store-image">
                        <img src={this.props.profile_picture?this.props.profile_picture:"https://img.freepik.com/free-vector/people-standing-store-queue_23-2148594615.jpg?size=626&ext=jpg"} alt="Store"/>
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