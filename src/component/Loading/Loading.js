import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./LoadingStyle.css";

function Loading(props) {
  return (
    <Container className="container-module loading" type={props.type}>
      <Row className="container-title">
        <Col sm>LOADING.</Col>
      </Row>
      <Row>
        <Col>
          <div className="lds-dual-ring"></div>
        </Col>
      </Row>
      <Row>
        <Col sm>LOADING.PLEASE WAIT</Col>
      </Row>
    </Container>
  );
}

export default Loading;
