import React from "react";
import { Navbar, Button, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/Search">Mile High Jokester</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Search">Jokes</Nav.Link>
      <Nav.Link href="/Detail">Saved Jokes</Nav.Link>

      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="User ID" className="mr-sm-2" />
      <FormControl type="text" placeholder="Password" className="mr-sm-2" />


      <Button variant="outline-success">Login</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavBar;