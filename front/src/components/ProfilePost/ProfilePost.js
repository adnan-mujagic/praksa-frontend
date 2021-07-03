import "./ProfilePost.css";
import StoreProfileOverlay from "../StorePostOverlay/StorePostOverlay";

export default function ProfilePost(props) {
    
    return(
        <div className="store-profile-post">
            <StoreProfileOverlay details = {props.post}/>
            <div className="store-profile-post-image">
                <img src={props.post.image_url} alt="Post"/>
            </div>
        </div>
    )
}