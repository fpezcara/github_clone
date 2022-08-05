import React from "react";
import SearchInput from "../SearchInput";
import Repos from "../Repos";
import './styles.css'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Container size="sm">
      <Row size="md" className="mt-4">
        <h1>Github</h1>
      </Row>
      <Row
        md={2}
        className="d-flex align-items-center justify-content-center flex-row mt-3"
      >
        <Col className="m-4">
          <SearchInput />
        </Col>
      </Row>
      <Row md={2} className="d-flex align-items-center justify-content-center flex-row mt-3">
        <Col>
          <Repos />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
