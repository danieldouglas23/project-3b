import React from "react";
import "./style.css";

const NewForm = (props) => {
    return (
        <form className="form-group" id="book-form">
            <h1><i class="fas fa-laugh-squint"></i> Dad Joke Generator! <i class="fas fa-laugh-squint"></i></h1>
            <button className="btn btn-success" type="submit" id="submit-button" value="Submit" onClick={props.onClick}>
                Generate 10 New Jokes!!
            </button>
        </form>
    );
}

export default NewForm;