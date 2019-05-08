import React from "react";
import "./style.css";
import DeleteBtn from "../DeleteBtn";

const SavedCard = (props) => {
    return (
        <>
            {props.savedJokes.map(savedJokes => {
                return (
                    <li id="card-list-saved"  key={savedJokes._id}>
                        <div className="card" >
                            <div className="card-header">

                                <div className="row">
                                    <div className="column" id="left-column-saved">
                                        <h4 id="card-h4-saved">Setup: {savedJokes.setup}</h4> <br />
                                        <h5>Punchline:  {savedJokes.punchline} </h5>
                                    </div>
                                    <div className="column" id="right-column-saved">

                                        <DeleteBtn  onClick={props.onClick} id={savedJokes._id}/>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <div className="card-body">
                            <div className="row">
                                <div className="column" id="left-body-column-saved" >
                                    
                                   
                                </div>
                                <div className="column" id="right-body-column-saved" >
                                    <p></p>
                                </div>
                            </div>
                        </div> */}

                    </li>
                    
                );
            })}
            </>
    )
}

export default SavedCard;