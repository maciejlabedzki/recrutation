import React from "react";

import { connect } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import User from "../User/User.js";
import Cpu from "../Cpu/Cpu.js";
import TotalSales from "../TotalSales/TotalSales.js";
import Notification from "../Notification/Notification";
import Loading from "../Loading/Loading.js";

function Layout({ isLogin, page, dataFetch, dispatch }) {
  return (
    <Container fluid>
      {isLogin.login === true && (
        <Row>
          <Col sm="3">
            <User />
            <Cpu />
            <Notification msg="Coming soon..." title="Memory" />
          </Col>
          <Col sm="6">
            {(page === "ALL" || page === "STATISTIC") && <TotalSales />}

            {(page === "ALL" || page === "MESSAGES") && (
              <Notification msg="Coming soon..." title="Messages" />
            )}

            {(page === "ALL" || page === "STATISTIC") && (
              <Notification msg="Coming soon..." title="Statistic" />
            )}

            {(page === "ALL" || page === "SETTINGS") && (
              <Notification msg="Coming soon..." title="Settings" />
            )}
          </Col>

          <Col sm="3">
            <Notification msg="Coming soon..." title="Inbox" />
            <Notification msg="Coming soon..." title="Messaging" />
            <Notification msg="Coming soon..." title="Timeline" />
            <Notification msg="Coming soon..." title="Chat" />
            <Notification msg="Coming soon..." title="Orders" />
          </Col>
        </Row>
      )}

      {isLogin.login === false && (
        <Row>
          <Col sm="12">
            <Notification msg="Please login to see content." title="Message" />
          </Col>
        </Row>
      )}

      {dataFetch.error !== null && (
        <Row>
          <Col sm="12">
            <Notification
              msg={dataFetch["error"]["message"]}
              title="Error"
              type="error"
            />
          </Col>
        </Row>
      )}

      {dataFetch.loading === true && <Loading />}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  isLogin: state.loginStatus,
  page: state.pageNavigation.page,
  dataFetch: state.dataFetch,
});

export default connect(mapStateToProps)(Layout);
