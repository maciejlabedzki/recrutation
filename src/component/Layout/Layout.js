import React from "react";

import { connect } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import User from "../User/User.js";
import Cpu from "../Cpu/Cpu.js";
import TotalSales from "../TotalSales/TotalSales.js";

function Layout({ dataFetch, dispatch }) {
  return (
    <Container fluid>
      <Row>
        <Col sm="3">
          {dataFetch.loading === true && <User />}
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

const mapStateToProps = (state) => ({
  dataFetch: state.dataFetch,
});

export default connect(mapStateToProps)(Layout);
