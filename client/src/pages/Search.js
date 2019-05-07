import React, { Component } from "react";
// import { Container } from "react-bootstrap";
// import { Form, Row, Col } from 'react-bootstrap';
import API from "../utils/API";
import NewForm from "../components/NewForm";
import ResultCard from "../components/ResultCard";

class Search extends Component {
  state = {
    jobData: [],
    searchCategory: "",
    searchJobLevel: "",
    searchLocation: ""
  }

  handleInputChange = event => {
    // this.setState({ searchCategory: event.target.value });
    // this.setState({ searchJobLevel: event.target.value });
    // this.setState({ searchLocation: event.target.value });
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    console.log("Hello")
    event.preventDefault();
    API.searchJobs()
      .then(res => {
        // console.log(res.data.results[0].refs.landing_page)
        // console.log(res.data.results[0].name)
        // console.log(res.data.results[0].locations[0].name)
        console.log(res.data);
        if (res.data) {
          // store response in a array
          let results = res.data
          //map through the array 
          results = results.map(result => {
              result = {
                  key: result.id,
                  id: result.id,
                  setup: result.setup,
                  punchline: result.punchline,
                  // location: result.locations[0].name
                  // description: result.contents
              }
              return result;
          })
          // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
          this.setState({ jobData: results });
          // this.setState({ searchedBook: "" });
      }
       
      })
      .catch(err => console.log(err));
  }
  

  render() {
    return (
      <>

        <NewForm  onClick={this.handleFormSubmit}>
         
        </NewForm>

        <div id="card-container">
          <h4>Results</h4>
          <ResultCard jobData={this.state.jobData}/>
        </div>



      </>
    )
  }
}

export default Search;