import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import User from "../User/User.js";
import Cpu from "../Cpu/Cpu.js";

import TotalSales from "../TotalSales/TotalSales.js";

class Layout extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm="3">
            <User />
            <Cpu />
          </Col>
          <Col sm="6">
            <TotalSales />
          </Col>

          <Col sm="3">
            <User />
            <Cpu />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Layout;
