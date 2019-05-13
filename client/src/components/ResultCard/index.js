import React from "react";
import {Link} from "react-router-dom";
import "./style.css";
import SaveBtn from "../SaveBtn";
import Saved from "../Saved";

const ResultCard = (props) => {
    return (
        <>
            {props.jokeData.map(jokeData => {
                return (
                    <li id="card-list"  key={jokeData.id}>
                        <div className="card" >
                            <div className="card-header">

                                <div className="row">
                                    <div className="column" id="left-column">
                                        <h4 id="card-h4">Setup: {jokeData.setup}</h4> <br />
                                        <h5>Punchline: {jokeData.punchline} </h5>
                                    </div>
                                    <div className="column" id="right-column">

                                         
                                        {/* <SaveBtn onClick={props.onClickSave} id={jokeData.id}/> */}
                                        

                                        

                                        <SaveBtn  onClick={props.onClick} id={jokeData.id}/>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <div className="card-body">
                            <div className="row">
                                <div className="column" id="left-body-column" >
                                    
                                   
                                </div>
                                <div className="column" id="right-body-column" >
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

export default ResultCard;