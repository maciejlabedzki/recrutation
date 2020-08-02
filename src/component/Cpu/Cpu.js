import React, { Component } from "react";

import { connect } from "react-redux";

import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./CpuStyle.css";

import ProgressBar from "react-bootstrap/ProgressBar";

function Cpu({ data, dispatch }) {
  return (
    <Container className="container-module">
      <Row className="container-title">
        <Col sm>CPU</Col>
        <Col sm className="justify-text-right">
          <span className="icon-cogs"></span>
        </Col>
      </Row>
      <Row>
        <Col sm className="describe">
          {data !== null && data["cpu"]["name"]}
        </Col>
      </Row>
      <Row>
        <Col sm className="justify-text-left">
          Core 1
        </Col>
      </Row>
      <Row>
        <Col sm>
          <ProgressBar
            now={data !== null && data["cpu"]["core-1"]}
            label={`${data !== null && data["cpu"]["core-1"]}%`}
          />
        </Col>
      </Row>
      <Row>
        <Col sm className="justify-text-left">
          Core 2
        </Col>
      </Row>
      <Row>
        <Col sm>
          <ProgressBar
            now={data !== null && data["cpu"]["core-2"]}
            label={`${data !== null && data["cpu"]["core-2"]}%`}
          />
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  data: state.dataFetch.data,
});

export default connect(mapStateToProps)(Cpu);
