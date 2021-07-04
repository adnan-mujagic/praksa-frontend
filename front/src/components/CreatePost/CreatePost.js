import "./CreatePost.css";
import { useState } from "react"
import fetchData from "./../../generic_functions/fetch";
import { useParams } from "react-router-dom";



export default function CreatePost(props)  {
    const {id} = useParams();
    
    const [expanded, setExpanded] = useState(false);
    const [textToShow, setTextToShow] = useState("+");

    const [name, setName] = useState("");
    const [cost, setCost] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");
    const [productState, setProductState] = useState("");

    const onHeaderButtonClick = () => {
        setExpanded(!expanded);
        expanded?setTextToShow("+"):setTextToShow("-");
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await fetchData("/stores/" + id + "/posts", "POST", {
            name,
            description,
            cost,
            image_url:image,
            quantity,
            state: productState,
        }).then(data => {
            setName("");
            setImage("");
            setCost("");
            setQuantity("");
            setDescription("");
            setProductState("");
            props.setStores();
        }).catch(err => console.log(err));
    }

    if(!expanded){
        return(
            <div className="create-post">
                <div className="create-post-header">
                    <button className="create-post-button" onClick={onHeaderButtonClick}>{textToShow}</button>
                </div>
            </div>
        )
    }

    else{
        return(
            <div className="create-post">
                <div className="create-post-header">
                    <button className="create-post-button" onClick={onHeaderButtonClick}>{textToShow}</button>
                </div>
                <p>Create a post to be listed under this store!</p>
                <form className="create-post-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name..." required value={name} onChange={e=>{setName(e.target.value)}}/>
                    <input type="text" placeholder="Price..." required value={cost} onChange={e=>{setCost(e.target.value)}}/>
                    <input type="text" placeholder="State (New, Used...)" required value={productState} onChange={e=>{setProductState(e.target.value)}}/>
                    <input type="text" placeholder="Quantity..." required value={quantity} onChange={e=>{setQuantity(e.target.value)}}/>
                    <textarea placeholder="Description..." required value={description} onChange={e=>{setDescription(e.target.value)}}/>
                    <input type="text" placeholder="Image URL" value={image} onChange={e=>{setImage(e.target.value)}}/>
                    <button className="create-post-submit-button">Add Post</button>
                    
                </form>
                
            </div>
        )
        
    }
}