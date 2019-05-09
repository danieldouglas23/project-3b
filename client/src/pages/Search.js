import React, { Component } from "react";
import {Link} from "react-router-dom";
// import { Container } from "react-bootstrap";
// import { Form, Row, Col } from 'react-bootstrap';
import API from "../utils/API";
// import Home from "./pages/Home";
// import Footer from "../components/Footer";
import NewForm from "../components/NewForm";
import ResultCard from "../components/ResultCard";
import "./styleSearch.css";

class Search extends Component {
  state = {
    jokeData: []
  }

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // }

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchJokes()
      .then(res => {
        if (res.data) {
          // store response in a array
          let results = res.data
          //map through the array 
          results = results.map(result => {
              result = {
                  key: result.id,
                  id: result.id,
                  setup: result.setup,
                  punchline: result.punchline
              }
              return result;
          })
          this.setState({ jokeData: results });
      }
       
      })
      .catch(err => console.log(err));
  }

  handleSaveButton = event => {
    event.preventDefault();
    console.log(this.state.jokeData);
    let savedJokes = this.state.jokeData.filter(joke => joke.id.toString() === event.target.id)
    console.log(savedJokes);
    console.log(savedJokes[0]);
    savedJokes = savedJokes[0];
    console.log(savedJokes);
    console.log(event.target.id);
    API.saveJoke(savedJokes)
        .then(alert("Your joke is saved!"))
        .catch(err => console.log(err))
}

  

  render() {
    return (
      <>

        <NewForm  onClick={this.handleFormSubmit}>
         
        </NewForm>

        <div id="card-container">
          <h4>Jokes</h4>
          <ResultCard jokeData={this.state.jokeData} onClick={ this.handleSaveButton} />
            
            
        </div>

        



      </>
    )
  }
}

export default Search;