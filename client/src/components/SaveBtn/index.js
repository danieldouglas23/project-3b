import React from "react";
import {Link} from "react-router-dom";

import "./style.css";

const SaveBtn = (props) => {
    return (
        <>
        <button className="btn btn-primary" onClick={props.onClick} id={props.id}>Save</button>                      

       
        </>
    );
}

export default SaveBtn;