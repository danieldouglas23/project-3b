import React, { Component } from "react";
import API from "../utils/API";
// import Home from "./pages/Home";
// import Footer from "../components/Footer";
import "./styleSearch.css";
import SavedCard from "../components/SavedCard";


class Detail extends Component {
    state = {
        savedJokes: [],
        
    }

    componentDidMount() {
        API.getJokes()
            .then(res => this.setState({ savedJokes: res.data }))
            .catch(err => console.log(err))
    }

    handleDeleteButton = (event) => {
        API.deleteJoke(event.target.id)
            .then(res => this.componentDidMount(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <div id="card-container">
                    <h4>Saved Jokes</h4>
                    <SavedCard savedJokes={this.state.savedJokes} onClick={this.handleDeleteButton} />
                    
 
                    

                    

                </div>

                
            </>
        
        );

    }
}

export default Detail;