import fetchData from "../../generic_functions/fetch";

export default function buy(post_id, quantity){
    return fetchData("/posts/" + post_id, "PUT" , {
        quantity:quantity-1
    })
}