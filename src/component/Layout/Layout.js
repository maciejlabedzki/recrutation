import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import User from "../User/User.js";
import Cpu from "../Cpu/Cpu.js";

class Layout extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm>
            <User />
            <Cpu />
          </Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
    );
  }
}

export default Layout;
