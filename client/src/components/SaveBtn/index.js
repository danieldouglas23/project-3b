import React from "react";
import "./style.css";

const SaveBtn = (props) => {
    return (
        <>
        <button className="btn btn-primary" onClick={props.onClick} id={props.id}>Save</button>
                                           
        <button className="btn btn-secondary"onClick={props.onClick} id={props.id} >Saved</button>
        


                                                
                                      

       
        </>
    );
}

export default SaveBtn;