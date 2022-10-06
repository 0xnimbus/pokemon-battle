import React from "react"

export default function Nav(props){

    return(
        <div>
            <img src={props.pic} className="profile-image" alt='' />
            <h1> Charizard </h1> 
        </div> 
    )

}