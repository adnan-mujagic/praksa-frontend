
import "./LeftNav.css";
import React from "react";

import ProfileCard from "../ProfileCard/ProfileCard";

class LeftNav extends React.Component{
    

    render(){
        return(
            <div className="left-navbar">
                <ProfileCard profile_picutre="https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340" username="adnan-mujagic" full_name="Adnan Mujagic" stores={["store1", "store2", "store3", "etc"]}/>
            </div>
        )
    }
}

export default LeftNav;