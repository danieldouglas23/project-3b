import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import "./style.css";


function Jumbo() {
    return (
        <Jumbotron id="jumbo">
  <Container>
    <h1>Job Search</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
    
  </Container>
</Jumbotron>
    )

}

export default Jumbo;