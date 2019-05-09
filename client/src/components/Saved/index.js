import React from "react";
import {Link} from "react-router-dom";

// import "./style.css";

const Saved = (props) => {
    return (
        <>
        
                                           
        <button className="btn btn-secondary" id={props.id}>
            <Link to="/Detail" >Saved</Link>
        </button>
        


                                                
                                      

       
        </>
    );
}

export default Saved;