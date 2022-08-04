import React from "react";
import { RepoProvider } from "./context";
import { NavBar, SearchInput, Repos } from "./components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = () => {
  return (
    <>
      <RepoProvider>
        <NavBar />
        <Container size="sm">
          <Row className="p-3">
            <h1>Github</h1>
            <h4>Search for repositories entering the username below</h4>
          </Row>
          <Row justify md={4} className="d-flex flex-row mt-3 ">
            <Col className="m-4 ">
              <SearchInput />
            </Col>
          </Row>
          <Row md={2}>
            <Col>
              <Repos />
            </Col>
          </Row>
        </Container>
      </RepoProvider>
    </>
  );
};

export default App;
