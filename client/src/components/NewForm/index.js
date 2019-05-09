import React from "react";
import "./style.css";

const NewForm = (props) => {
    return (
        <form className="form-group" id="book-form">
            <div className="form-actions text-white">
                <h1><i className="fas fa-laugh-squint text-warning"></i><img src="https://cdn.cnn.com/cnn/interactive/2016/06/us/dad-joke-generator/media/title.gif" alt="logo" height="42" width="42"></img><i className="fas fa-laugh-squint text-warning"></i></h1>
                <button className="btn btn-success" type="submit" id="submit-button" value="Submit" onClick={props.onClick}>Generate 10 New Jokes!!</button>
            </div>    
        </form>
    );
}

export default NewForm;