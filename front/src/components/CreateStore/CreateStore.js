import "./CreateStore.css";
import {useState} from "react"
import fetchData from "../../generic_functions/fetch";
import { useParams } from "react-router";

export default function CreateStore() {
    const {id} = useParams();
    const [expanded, setExpanded] = useState(false);
    const [textToShow, setTextToShow] = useState("+");

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [image, setImage] = useState("");    
    
    const onHeaderButtonClick = ()=>{
        setExpanded(!expanded);
        expanded?setTextToShow("+"):setTextToShow("-");
    }

    const clearInputs = () =>{
        setName("");
        setCity("");
        setAddress("");
        setImage("");
    }

    const handleSubmit = async e => {
        e.preventDefault();
        console.log({
            name,
            city,
            address,
            image
        })
        await fetchData("/users/" + id + "/stores", "POST", {
            name,
            city,
            address,
            image
        })
        .then(clearInputs())
        .catch(err => console.log(err.message))
    }

    if(!expanded){
        return(
            <div className="create-store">
                <div className="create-store-header">
                    <button className="add-button" onClick={onHeaderButtonClick}>{textToShow}</button>
                    
                </div>
            </div>
        )
    }

    else{
        return(
            <div className="create-store">
                <button className="add-button" onClick={onHeaderButtonClick}>{textToShow}</button>
                <p className="create-store-title">You can create your own store profile by completing this small form!</p>
                <form className="create-store-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name..." value={name} required onChange={e=>setName(e.target.value)}/>
                    <input type="text" placeholder="City..." value={city} required onChange={e=>setCity(e.target.value)}/>
                    <input type="text" placeholder="Address..." value={address} required onChange={e=>setAddress(e.target.value)}/>
                    <input type="text" placeholder="Image URL..." value={image} onChange={e=>setImage(e.target.value)}/>
                    <button type="submit" className="create-store-submit-button">Add Store</button>
                </form>
            
            </div>
        )
    }

    
}