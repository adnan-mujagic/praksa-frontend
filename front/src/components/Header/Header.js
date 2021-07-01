import React from "react"
import "./Header.css";



class Header extends React.Component{
    state={
        loggedIn : sessionStorage.getItem("token")?true:false
    }

    onLogOut(){
        sessionStorage.removeItem("token");
        window.location = "/login";
        this.setState({loggedIn:false});
    }

    onLogIn(){
        window.location = "/login";
    }

    onSignUp(){
        window.location = "/register"
    }

    render(){
        return(
            <div className="header">
                <div className="header-logo">mediasell</div>
                
                    {this.state.loggedIn?
                        <div className="header-actions">
                            <button className="header-btn" onClick={this.onLogOut}>Log Out</button>
                        </div> : 
                        <div className="header-actions">
                            <button className="header-btn" onClick={this.onLogIn}>Log In</button>
                            <button className="header-btn" onClick={this.onSignUp}>Sing Up</button>
                        </div>

                    }
                    
                
            </div>
        )
    }
}

export default Header