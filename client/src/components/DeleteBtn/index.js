import React from "react";
import "./style.css";

const DeleteBtn = (props) => {
    return (
        <button className="btn btn-danger" onClick={props.onClick} id={props.id} >Delete</button>
    );
}

export default DeleteBtn;