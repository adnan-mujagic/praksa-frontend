import React from "react";
import "./Dashboard.css";
import Post from "../Post/Post";

class Dashboard extends React.Component{
    

    render(){
        return(
            <div className="dashboard">
                <Post name="iPhone" cost="500" state="New" description="new iPhone it is amazing!" product_picture="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-red-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343703000"/>
                <Post name="Samsung Galaxy" cost="299" state="Used" description="Very cool economic phone. Reliable" product_picture="https://images.samsung.com/is/image/samsung/assets/hr/galaxy-a52/pcd/a-category/img_bnn_galaxy_device.png?$ORIGIN_PNG$" />
            </div>
        )
    }
}

export default Dashboard;