/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div className="copyright" id="copyright">
            Développé par ZHOU Alec et PACE Tom.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
