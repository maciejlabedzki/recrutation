import React from "react";

import { connect } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import User from "../User/User.js";
import Cpu from "../Cpu/Cpu.js";
import TotalSales from "../TotalSales/TotalSales.js";

function Layout({ isLogin, dispatch }) {
  return (
    <Container fluid>
      <Row>
        <Col sm="3">
          {isLogin.login === true && <User />}
          <Cpu />
        </Col>
        <Col sm="6">
          <TotalSales />
        </Col>

        <Col sm="3">
          {isLogin.login === true && <User />}
          <Cpu />
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  isLogin: state.loginStatus,
});

export default connect(mapStateToProps)(Layout);
