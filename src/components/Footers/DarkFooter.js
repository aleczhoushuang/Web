/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <div className="copyright" id="copyright">
          Développé par ZHOU Alec et PACE Tom.
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
