import React, { Component } from "react";

import { connect } from "react-redux";

import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import imgUser from "../../img/user.png";

import "./UserStyle.css";

function User({ data, dispatch }) {
  const handlePage = (page) => {
    dispatch({ type: "PAGE", payload: page });
  };

  const handleLogout = (page) => {
    dispatch({ type: "DATA-CLEAR" });
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <Container className="container-module user-modal">
        <Row>
          <Col>
            <Image src={imgUser} roundedCircle />
          </Col>
        </Row>
        <Row>
          <Col>
            {data !== null && data["message"]["unread"]}/
            {data !== null && data["message"]["all"]}
          </Col>
          <Col>${data !== null && data["ballance"]}</Col>
        </Row>
        <Row>
          <Col>Message</Col>
          <Col>Ballance</Col>
        </Row>
        <Row>
          <Col className="user-listgroup-wrapper">
            <ListGroup className="user-listgroup">
              <ListGroup.Item className="button-hover">
                <Row onClick={() => handlePage("MESSAGES")}>
                  <Col>
                    <span className="icon-envelop"></span>{" "}
                  </Col>
                  <Col>Messages</Col>
                  <Col>
                    <span className="icon-circle-right"></span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="button-hover">
                <Row onClick={() => handlePage("STATISTIC")}>
                  <Col>
                    <span className="icon-stats-dots"></span>{" "}
                  </Col>
                  <Col>Statistic</Col>
                  <Col>
                    <span className="icon-circle-right"></span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="button-hover">
                <Row onClick={() => handlePage("SETTINGS")}>
                  <Col>
                    <span className="icon-cog"></span>{" "}
                  </Col>
                  <Col>Settings</Col>
                  <Col>
                    <span className="icon-circle-right"></span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="button-hover">
                <Row onClick={() => handleLogout()}>
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

const mapStateToProps = (state) => ({
  data: state.dataFetch.data,
});

export default connect(mapStateToProps)(User);
