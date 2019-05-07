import React from "react";
import "./style.css";
import SaveBtn from "../SaveBtn";

const ResultCard = (props) => {
    return (
        <>
            {props.jobData.map(jobData => {
                return (
                    <li id="card-list"  >
                        <div className="card" >
                            <div className="card-header">

                                <div className="row">
                                    <div className="column" id="left-column">
                                        <h4 id="card-h4">{jobData.setup}</h4> <br />
                                        <h5>Location: {jobData.punchline} </h5>
                                    </div>
                                    <div className="column" id="right-column">

                                        <SaveBtn  />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="card-body">
                            <div className="row">
                                <div className="column" id="left-body-column" >
                                    
                                   
                                </div>
                                <div className="column" id="right-body-column" >
                                    <p></p>
                                </div>
                            </div>
                        </div>

                    </li>
                    
                );
            })}
            </>
    )
}

export default ResultCard;