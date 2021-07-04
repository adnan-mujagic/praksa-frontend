import "./Loading.css"
import { IconContext } from "react-icons/lib"
import {AiOutlineLoading} from "react-icons/ai"
import React from "react"

export default class Loading extends React.Component{
    render(){
        return(
            <IconContext.Provider value={{className:"loading-icon"}}>
                <div className="loading">
                    <AiOutlineLoading />
                </div>
            </IconContext.Provider>
        )
    }
}