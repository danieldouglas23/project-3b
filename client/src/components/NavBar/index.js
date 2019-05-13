import React from "react";
import { Navbar, Button, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";


function NavBar() {
  return (
    <div>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/Search">Mile High Jokester</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
     <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/Search">Jokes</Nav.Link>
      <Nav.Link href="/Detail">Saved Jokes</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="User ID" className="mr-sm-2" />
      <FormControl type="text" placeholder="Password" className="mr-sm-2" />


      <Button variant="outline-success">Login</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>
  


    <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
      <a className="navbar-brand" href="#"> <i className="fas fa-laugh-squint text-warning"></i> Mile High Jokester <i className="fas fa-laugh-squint text-warning"></i>
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Generate</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Detail">Saved</a>
          </li>
        </ul>
      </nav>
      
      
  )
};

export default NavBar;