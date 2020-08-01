import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressBar from "react-bootstrap/ProgressBar";

const percentage = 66;
const percentage = 66;
class Cpu extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm>Intel Core Duo</Col>
        </Row>
        <Row>
          <Col sm>Core 0</Col>
          <Col sm>
            <ProgressBar now={now} label={`${now}%`} />
            {/* <CircularProgressbar value={percentage} text={`${percentage}%`} />; */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cpu;
