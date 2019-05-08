import React from "react";
import "./style.css";

const SaveBtn = (props) => {
    return (
        <button className="save-button" onClick={props.onClick} id={props.id}>Save</button>
    );
}

export default SaveBtn;