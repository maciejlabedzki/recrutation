import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./CpuStyle.css";

import ProgressBar from "react-bootstrap/ProgressBar";

const core_0 = 40;
const core_1 = 66;

class Cpu extends Component {
  render() {
    return (
      <Container className="container-module">
        <Row>
          <Col sm>CPU</Col>
          <Col sm>
            <span className="icon-cogs"></span>
          </Col>
        </Row>
        <Row>
          <Col sm>Intel Core Duo</Col>
        </Row>
        <Row>
          <Col sm className="justify-text-left">
            Core 0
          </Col>
        </Row>
        <Row>
          <Col sm>
            <ProgressBar now={core_0} label={`${core_0}%`} />
          </Col>
        </Row>
        <Row>
          <Col sm className="justify-text-left">
            Core 1
          </Col>
        </Row>
        <Row>
          <Col sm>
            <ProgressBar now={core_1} label={`${core_1}%`} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cpu;
