import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Fonctionnement global de l’app</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        Next shot
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        Shotguns
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <p>
                      Cette page permet d’avoir accès à votre prochain shotgun rapidement. Ce prochain shotgun est un shotgun auquel vous vous êtes inscrit ou bien que vous avez créé. Une fois le minuteur arrivé à 10 secondes, la page devient floue et laisse place au bouton shotgun, ce n’est qu’une fois qu’il devient vert que vous pourrez appuyer dessus le plus rapidement possible. 
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                      Votre profil est visible dans cet onglet, l’équipe de Kiclic vous incite à remplir les informations basiques pour que vous effectuiez vos shotguns le plus rapidement possible. En effet, au moment de réaliser votre shotgun, les informations exigées par l’utilisateurs seront préremplis si votre profil est complété.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p>
                      Cette page répertorie tous vos shotguns (ceux auxquels vous vous êtes inscrits et ceux que vous avez créés) et permet d’en créer des nouveaux ou de s’inscrire à des shotguns existants. En appuyant sur un shotgun de la liste, selon son état, l’app vous enverra vers les réglages du shotgun ou bien les résultats de celui-ci. 
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
