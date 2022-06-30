import React from "react";


export default function Travel(props) {
    return (
        <div className="wrapper">
        <img src={props.imageUrl}></img>
        <h1>{props.title}</h1>
        <h1>{props.location}</h1>
        </div>
    )
}