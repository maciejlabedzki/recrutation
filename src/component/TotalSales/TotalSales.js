import React, { Component } from "react";

import { connect } from "react-redux";

//style
import "./TotalSales.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Chart from "../Chart/Chart";

function TotalSales({ data, dispatch }) {
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
          <CircularProgressbar
            value={data !== null && data["totalSales"]["percent"]}
            text={`${data !== null && data["totalSales"]["percent"]}%`}
          />
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
              <Row>{data !== null && data["totalSales"]["sales"]}</Row>
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
              <Row>{data !== null && data["totalSales"]["canceled"]}</Row>
              <Row>Canceled</Row>
            </Col>
          </Row>
        </Col>

        <Col sm="4"></Col>

        <Col sm="4">
          <Row>
            <Col sm="3" className="icon-holder">
              <span className="icon-coin-dollar"></span>
            </Col>
            <Col sm="9">
              <Row>{data !== null && data["totalSales"]["totalIncome"]}</Row>
              <Row>Total Income</Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  data: state.dataFetch.data,
});

export default connect(mapStateToProps)(TotalSales);
