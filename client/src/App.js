import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Navbar, Button, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import NavBar from "./components/NavBar/index";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import API from "./utils/API";





function App() {
  return (
    <Router>
      <>
        <NavBar></NavBar>

        <Switch >
          <Route exact path="/" component={Search} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/Detail" component={Detail} />

        </Switch>
        <Footer></Footer>

      </>
    </Router>
  )}

  export default App;


