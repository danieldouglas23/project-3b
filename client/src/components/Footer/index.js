import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
    <MDBFooter color="blue" className="footer-copyright text-center py-3 fixed-bottom">
      {/* <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">REACT Jokester</h5>
            <p>
              Solution for jobs and jokes.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/Home">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="/Home">About</a>
              </li>
              <li className="list-unstyled">
                <a href="/Home">Contact</a>
              </li>
              <li className="list-unstyled">
                <a href="/Home">Legal</a>
              </li>
            </ul>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer> */}
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Mile High Jokester
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;