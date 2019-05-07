import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Button, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import NavBar from "./components/NavBar/index";
import Jumbo from "./components/Jumbotron";
import Footer from "./components/Footer";
import Search from "./pages/Search";





function App() {
  return (
    <Router>
      <>
      <NavBar></NavBar>
      <Jumbo></Jumbo>
      <Switch >
        <Route exact path="/search" component={Search}/>

      </Switch>
     
      <Footer></Footer>

      </>
    </Router>


  );
}

export default App;
