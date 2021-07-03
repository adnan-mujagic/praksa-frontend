import React from "react";
import "./Dashboard.css";
import Post from "../Post/Post";
import fetchData from "../../generic_functions/fetch";

class Dashboard extends React.Component{
    state = {
        loading:true,
        posts: []
    }

    async componentDidMount() {
        const result = await fetchData("/posts", "GET");
        this.setState({posts:result.data, loading:false})
    }
  
    componentWillUnmount() {
    }

    render(){
        return(
            <div className="dashboard">
                {this.state.loading || !this.state.posts?
                <div>Loading...</div>:
                
                <div>{this.state.posts.map(post => (
                    post.quantity && post.quantity>0?  
                    <Post key={post._id} post_id={post._id} quantity={post.quantity} store_id={post.store._id} profile_picture={post.store.image} store_name={post.store.name} name={post.name} cost={post.cost} description={post.description} state={post.state} product_picture={post.image_url} />:
                    null
                ))}
                
                </div>}
            </div>
        )
    }
}

export default Dashboard;