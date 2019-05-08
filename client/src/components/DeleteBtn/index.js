import React from "react";
import "./style.css";

const DeleteBtn = (props) => {
    return (
        <button className="delete-button" onClick={props.onClick} id={props.id} >Delete</button>
    );
}

export default DeleteBtn;