import React, { Component } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import imgUser from "../../img/user.png";

import "./UserStyle.css";

export default class Navigation extends Component {
  render() {
    return (
      <>
        <Container className="container-module user-modal">
          <Row>
            <Col>
              <Image src={imgUser} roundedCircle />
            </Col>
          </Row>
          <Row>
            <Col>14/255</Col>
            <Col>$549.99</Col>
          </Row>
          <Row>
            <Col>Message</Col>
            <Col>Ballance</Col>
          </Row>
          <Row>
            <Col className="user-listgroup-wrapper">
              <ListGroup className="user-listgroup">
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <span className="icon-envelop"></span>{" "}
                    </Col>
                    <Col>Messages</Col>
                    <Col>
                      <span className="icon-circle-right"></span>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <span className="icon-stats-dots"></span>{" "}
                    </Col>
                    <Col>Statistic</Col>
                    <Col>
                      <span className="icon-circle-right"></span>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <span className="icon-cog"></span>{" "}
                    </Col>
                    <Col>Settings</Col>
                    <Col>
                      <span className="icon-circle-right"></span>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <span className="icon-switch"></span>{" "}
                    </Col>
                    <Col>Logout</Col>
                    <Col>
                      <span className="icon-circle-right"></span>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
