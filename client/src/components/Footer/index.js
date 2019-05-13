import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="special-color" className="footer-copyright text-center py-3 fixed-bottom">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Mile High Jokester
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;