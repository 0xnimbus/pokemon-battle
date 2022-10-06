import React from "react"

export default function Nav(props){

    return(
        <div>
            <img src={props.pic} className="profile-image" alt='' />
            <h1> Pikachu </h1> 
        </div> 
    )
}