import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Qui sommes nous?</h2>
                <h5 className="description">
                  Kiclic est née de la rencontre de deux étudiants ingénieurs des Mines d’Albi. Avant nous, le shotgun était une institution, mais pas une application. Nous avons simplifié leur organisation : votre shotgun n’est désormais plus qu’à portée de doigt.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/photo3.png") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/photo4.png") + ")"
                    }}
                  ></div>
                  <h3>
                    Qu'est-ce-que Kiclic?
                  </h3>
                  <p>
                    Kiclic reprend un concept connu de toutes et de tous, et plus
                    particulièrement des étudiants en école d’ingénieur, de commerce, etc.
                    En effet, si vous passez quelque temps en école, il ne se passera pas une
                    journée sans que vous entendiez le mot “Shotgun”, celui si signifie: “Moi
                    d’abord !” ou encore : “Prems !”
                  </p>
                  <p>
                    Le concept de shotgun s’utilise pour toute sorte d’événements, comme des week-ends
                    organisés au ski par l’école avec un nombre de places limitées, pour rentrer
                    dans une soirée privée, réserver des vêtements de promo, etc. Et c’est
                    pendant ces événements que le mot “shotgun” s’interprète de manière
                    beaucoup plus sérieuse à mesure que la compétition se dessine.
                  </p>
                  <p>
                    Kiclic permet aux utilisateurs de s’inscrire rapidement à un shotgun
                    ayant lieu à une certaine heure en rentrant un Shotcode à 6 chiffres
                    ( identifiant unique, propre à chaque shotgun ) dans la barre de recherche.
                    Contrairement aux Google doc actuels utilisés pour shotgun, l’application
                    permet à l’utilisateur de réaliser son shotgun indépendamment de sa
                    connexion internet.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Notre équipe</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/profil_alec.jpg")}
                    ></img>
                    <h4 className="title">Alec ZHOU</h4>
                    <p className="category text-info">Développeur</p>
                    <p className="description">
                      Développeur Backend de ce projet. Grâce à plusieurs
                      projets sur Grafana qu’il a réalisés au sein d’une entreprise chinoise, il a pu
                      acquérir toutes les compétences nécessaires au développement de
                      l’application mobile. Maîtrisant beaucoup de langages informatiques (java,
                      JavaScript, CSS, HTML), il a su développer le serveur de l’entreprise tout en
                      développant l’application mobile côté client. Passionné par l’informatique,
                      sa curiosité lui a permis de toujours être à la pointe de la technologie
                      utilisant les outils pour développer des applications les plus performants des
                      cinq dernières années .
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://www.instagram.com/aleczhoushuang/"
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://www.facebook.com/profile.php?id=100010238490068"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">

                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/tom.jpg")}
                    ></img>
                    <h4 className="title">Tom PACE</h4>
                    <p className="category text-info">Développeur et Designer</p>
                    <p className="description">
                      Créateur de la plateforme, son idée première était de simplifier le principe du shotgun dans les écoles et de créer une plateforme intuitive et réactive. Il développe sur SwiftUI et a codé l’application IOS disponible sur l’AppStore. Il s’est imposé comme le designer de l’app et a créé l’interface utilisateur que vous pouvez manipuler sur Android et iOS. Sa créativité lui a permis d’imaginer et de concevoir entièrement cette application mobile reprenant un principe que vous connaissez tous.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://www.instagram.com/tomg_._/"
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://www.facebook.com/tom.pace.35513"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
