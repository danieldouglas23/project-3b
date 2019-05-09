import React from "react";
import { Navbar, Button, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";


function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
      <a className="navbar-brand" href="#"><i className="fas fa-laugh-squint text-warning"></i> Mile High Jokester <i className="fas fa-laugh-squint text-warning"></i>
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