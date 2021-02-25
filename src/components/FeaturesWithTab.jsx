import React from 'react'
import { Tab, Row, Col, Nav } from "react-bootstrap"
import iPhone from "../images/iphone12.png"

const FeaturesWithTab = () => {
  return (
    <>
      <section className="feature-section custom-tab">
        <div className="container">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={4}>
                <Nav variant="pills" className="flex-column justify-content-evenly">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <h3>Belong</h3>
                      <p>Join groups that suit your needs and interests</p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <h3>Connect</h3>
                      <p>Form meaningful relationships and long-lasting friendships</p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="three">
                      <h3>Empower</h3>
                      <p>Experience a safe-space of empowering communication</p>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="tab-content">
                      <img src={iPhone} alt="images" />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="tab-content">
                      <img src={iPhone} alt="images" />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="three">
                    <div className="tab-content">
                      <img src={iPhone} alt="images" />
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </section>
    </>
  )
}

export default FeaturesWithTab
