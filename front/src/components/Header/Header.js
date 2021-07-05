import React from "react"
import "./Header.css";
import Loading from "../Loading/Loading";
import fetchData from "../../generic_functions/fetch";
import jwtDecode from "../../generic_functions/jwt-decode";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.onHeaderImageClick = this.onHeaderImageClick.bind(this);
    }

    state={
        loading:true,
        loggedIn : sessionStorage.getItem("token")?true:false,
        user: null
    }

    async componentDidMount(){
        if(this.state.loggedIn){
            const decoded = jwtDecode();
            let url_suffix = "/users/" + decoded.uid;
            const results = await fetchData(url_suffix, "GET");
            this.setState({user: results.data, loading:false});
        }
        this.setState({
            loading:false
        })
    }

    onHeaderImageClick = () =>{
        window.location = "/user/" + this.state.user._id;
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

    onTitleClick(){
        window.location = "/dashboard";
    }

    render(){
        return(
            <div className="header">
                <div className="header-logo" onClick={this.onTitleClick}>mediasell</div>
                
                    {this.state.loggedIn?
                        <div className="header-actions">
                            <button className="header-btn" onClick={this.onLogOut}>Log Out</button>
                            {this.state.loading?<Loading />:
                                <div className="header-profile-picture" onClick={this.onHeaderImageClick}>
                                    <img src={this.state.user.image} alt="User"/>
                                </div>
                            }
                        </div>
                        : 
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