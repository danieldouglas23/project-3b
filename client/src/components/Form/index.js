import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input() {
    return (
        <div className="form-group">
            <input className="form-control" id="inputbox"  />
        </div>
    );
}



export function SubmitBtn(props) {
    return (
        <button >Submit</button>
    );
}

export function ClearBtn(props) {
    return (
        <button >Clear</button>
    );
}

