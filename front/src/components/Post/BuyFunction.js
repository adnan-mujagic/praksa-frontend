import fetchData from "../../generic_functions/fetch";

export default async function buyFunction(post_id, quantity){
    if(quantity>0){
        await fetchData("/posts/" + post_id, "PUT" , {
            quantity:quantity-1
        })
    }
}