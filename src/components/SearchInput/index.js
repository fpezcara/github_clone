import React, { useState, useContext } from "react";
import { RepoContext } from "../../context";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./searchInput.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchInput = () => {
  const githubUrl = "https://api.github.com/users/";
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useContext(RepoContext);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(githubUrl + username + "/repos");
      await setRepos(data);
    } catch (err) {
      console.log(err);
    }
    setUsername("");
  };

  return (
    <>
      <Card
        size="md"
        className="text-center shadow-lg p-3 mb-5 bg-white rounded"
      >
        <Card.Body>
          <span id="cardBodySpan">Search for public repositories entering a username below</span>
          <Form className="mt-4">
            <Form.Group controlId="username" className="text-dark">
              <Form.Label className="mb-4">Enter your Github username</Form.Label>
              <Form.Control
                onChange={handleUsername}
                type="text"
                placeholder="Enter username"
                className="searchInput text-dark"
                value={username}
              />
            </Form.Group>
            <Button
              variant="dark"
              onClick={handleSubmit}
              type="submit"
              className="search"
            >
              Search
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default SearchInput;
