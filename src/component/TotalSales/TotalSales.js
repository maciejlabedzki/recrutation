import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Chart from "../Chart/Chart";

const percentage = 66;
class Cpu extends Component {
  render() {
    return (
      <Container className="container-module">
        <Row>
          <Col sm>Total Sales</Col>
          <Col sm>
            <span className="icon-stats-bars"></span>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </Col>
          <Col sm>
            <Chart />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cpu;
