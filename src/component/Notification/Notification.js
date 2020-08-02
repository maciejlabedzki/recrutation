import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./NotificationStyle.css";

function Notification(props) {
  return (
    <Container className="container-module" type={props.type}>
      <Row className="container-title">
        <Col sm>{props.title}</Col>
        <Col sm className="justify-text-right">
          <span className="icon-quill"></span>
        </Col>
      </Row>
      <Row>
        <Col sm>{props.msg}</Col>
      </Row>
    </Container>
  );
}

export default Notification;
