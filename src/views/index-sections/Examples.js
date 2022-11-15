import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";

// core components

function Examples() {
  return (
    <>
      <div className="section section-examples" data-background-color="black">
        <div className="space-50"></div>
        <Container className="text-center">
          <Row>
            <div className="col">
              <a href="/landing-page" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/profil.png")}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                to="/landing-page"
                outline
                tag={Link}
              >
                Voir la page de profil
              </Button>
            </div>
            
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Examples;
