import "./ProfilePost.css";

export default function ProfilePost(props) {
    
    return(
        <div className="profile-post">
            <div>
                <img src={props.image} alt="Post"/>
            </div>
        </div>
    )
}