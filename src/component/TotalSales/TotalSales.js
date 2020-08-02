import React, { Component } from "react";

//style
import "./TotalSales.css";
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
      <Container className="container-module totalSales">
        <Row className="container-title">
          <Col>Total Sales</Col>
          <Col className="justify-text-right">
            <span className="icon-stats-bars"></span>
          </Col>
        </Row>

        <Row>
          <Col sm="3">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </Col>
          <Col sm="9">
            <Chart />
          </Col>
        </Row>

        <Row className="point">
          <Col sm="2">
            <Row>
              <Col sm="6" className="icon-holder">
                <span className="icon-point-up"></span>
              </Col>
              <Col sm="6">
                <Row>155</Row>
                <Row>Sales</Row>
              </Col>
            </Row>
          </Col>

          <Col sm="2">
            <Row>
              <Col sm="6" className="icon-holder">
                <span className="icon-point-down"></span>
              </Col>
              <Col sm="6">
                <Row>23</Row>
                <Row>Canceled</Row>
              </Col>
            </Row>
          </Col>

          <Col sm="4"></Col>

          <Col sm="4">
            <Row>
              <Col sm="6" className="icon-holder">
                <span class="icon-coin-dollar"></span>
              </Col>
              <Col sm="6">
                <Row>19,251,110</Row>
                <Row>Total Income</Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cpu;
