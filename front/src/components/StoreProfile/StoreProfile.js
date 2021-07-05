import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import ProfilePost from "../ProfilePost/ProfilePost";
import Loading from "../Loading/Loading";
import CreatePost from "../CreatePost/CreatePost";
import "./StoreProfile.css";
import fetchData from "../../generic_functions/fetch";
import jwtDecode from "../../generic_functions/jwt-decode";

const useFetch = (params, loadStores) => {
    const [store, setStore] = useState(null);
    const [loading, setLoading] = useState(true);
    const [owner, setOwner] = useState(false);

    useEffect(()=>{

        async function getData() {
            let url_suffix = "/stores/" + params;
            
            let result = await fetchData(url_suffix, "GET");
            let retrieved_store = result.data;
            
            result = await fetchData(url_suffix + "/posts", "GET");
            retrieved_store.posts = result.data;
            console.log(retrieved_store);
            
            setStore(retrieved_store);
            setOwner(checkOwnership(retrieved_store.owner._id))
            setLoading(false);
        }
        getData();
        
    },[params, loadStores])
    return {store, loading, owner}
}

const checkOwnership = (store_owner_id) =>{
    const user = jwtDecode();
    if(store_owner_id === user.uid){
        return true;
    }
    return false;
}

export default function StoreProfile() {
    const {id} = useParams();

    const [loadStores, setLoadStores] = useState(false);

    const {store, loading, owner} = useFetch(id, loadStores);

    const onStoresChanged = () => {
        setLoadStores(!loadStores);
    }

    const onUserClick = () =>{
        window.location = "/user/"+store.owner._id;
    }

    if(loading || !store){
        return(
            <Loading />
        )
    }

    return(
        <div className="store-profile">
            <div className="store-profile-header">
                <div className="store-profile-image">
                    <img src={store.image?store.image: "https://image.freepik.com/free-vector/convenience-store-isometric-shop-24-hour-isometric-design_201904-46.jpg"} alt="Store"/>
                </div>
                <div className="store-profile-creds">
                    <div className="store-profile-title">{store.name}</div>
                    <div className="store-profile-info">City: {store.location.city}</div>
                    <div className="store-profile-info">Address: {store.location.address}</div>
                    <div className="store-profile-owner">
                        <div className="store-profile-owner-image">
                            <img alt="Store owner" onClick={onUserClick} src={store.owner.image?store.owner.image: "https://image.flaticon.com/icons/png/512/3135/3135715.png"}/>
                        </div>
                        <div className="store-profile-owner-username" onClick={onUserClick}>@{store.owner.username}</div>
                    </div>
                </div>
            </div>
            {owner?<CreatePost setStores={onStoresChanged}/>:null}
            <div className="products">
                {store.posts.length===0?
                    <div>This store isn't selling any items yet!</div>:

                    <div className="products-wrapper">
                        {store.posts.map(post => (
                            <ProfilePost key={post._id} post={post} removable={owner}/>
                        ))}
                    </div>
                }

                
            </div>
        </div>
        
    )
}