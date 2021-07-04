import "./ProfilePost.css";
import StorePostOverlay from "../StorePostOverlay/StorePostOverlay";

export default function ProfilePost(props) {
    
    return(
        <div className="store-profile-post">
            <StorePostOverlay details = {props.post} removable = {props.removable}/>
            <div className="store-profile-post-image">
                <img src={props.post.image_url?props.post.image_url:null} alt="Post"/>
            </div>
        </div>
    )
}