import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function Download() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">Télécharger gratuitement l'application</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round"
                color="primary"
                href="https://apps.apple.com/fr/app/shotgunapp/id1640004382?l=en"
                outline
                role="button"
                size="lg"
                target="_blank"
              >
                Télécharger sur AppStore
              </Button>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round"
                color="primary"
                href="https://play.google.com/store/apps/details?id=com.aleczhou.shotgunapp"
                outline
                role="button"
                size="lg"
                target="_blank"
              >
                Télécharger sur PlayStore
              </Button>
            </Col>

          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2>Vous en voulez plus ? </h2>
              <h5 className="description">
                Nous allons lancer une nouvelle version de l’app d’ici peu de temps, dans laquelle des marques et des bars pourront créer leur shotguns à l’échelle de la France. Tous les shotguns seront visibles sur une carte ou dans un fil d’actualité, et vous pourrez vous inscrire sans limite.
              </h5>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Suivez-nous sur les différents réseaux sociaux!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                href="https://www.facebook.com/profile.php?id=100087967537475"
                id="tooltip735272548"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                Suivez-nous sur Facebook
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="instagram"
                href="https://www.instagram.com/shotgunapp_/"
                id="tooltip647117716"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip647117716">
                Suivez-nous sur Instagram
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Download;
