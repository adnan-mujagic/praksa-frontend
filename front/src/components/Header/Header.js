import React from "react"
import "./Header.css";



class Header extends React.Component{
    

    render(){
        return(
            <div className="header">
                <div className="header-logo">mediasell</div>
                <div className="header-actions">
                    <button className="header-btn">Log In</button>
                    <button className="header-btn">Sing Up</button>
                </div>
            </div>
        )
    }
}

export default Header